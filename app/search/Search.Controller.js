
(function()
{'use strict';
    angular
        .module('musicApp.search')
        .controller('SearchMusicCtrl',SearchMusicCtrl);

    SearchMusicCtrl.$inject=['searchMusicFactory' , 'NgTableParams' , '$filter' ];
    function SearchMusicCtrl( searchMusicFactory , NgTableParams , $filter ) {
        var vm = this;
        vm.progress = true;

        activate();

        function activate() {
            vm.names = ['Artist' , 'Album'];
            vm.type = vm.names[1];

        }

        vm.hideTable = function(){
            vm.progress = true;
        }


        vm.searchArtist = function () {
            vm.progress = true;
            vm.errMessage = '';

            searchMusicFactory.getData(vm.name , vm.type).then(function (response) {
                if(response.status == 200){
                    if(vm.type == 'Artist'){
                        vm.list = response.data.artists.items;
                        var temp = response.data.artists.items;
                        for ( var index = 0 ;index < temp.length ; index++) {
                            for (var flag=0 ; flag < temp[index].images.length ; flag++){
                                vm.list[index].showImages = temp[index].images[flag];

                            }

                        }

                    }else {
                        vm.list = response.data.albums.items;
                        var temp = response.data.albums.items;
                        for ( var index = 0 ;index < temp.length ; index++) {
                            for (var flag=0 ; flag < temp[index].images.length ; flag++){
                                vm.list[index].showImages = temp[index].images[flag];
                            }

                        }
                    }
                    if (vm.list.length == 0){
                        vm.errMessage = 'Redefine your search';
                    }
                    else {
                        populateTable();
                    }

                }

            })
        }

        function populateTable() {

            vm.progress = false;
            vm.tableParams = new NgTableParams(
                {
                    page: 1, // show first page
                    count: 5, // count per page
                    sorting: {
                        lastModified: 'desc' // initial sorting
                    }, // count per page
                    filter: {
                        name: '' // initial filter
                    }
                }, {
                    getData: function (params) {
                        console.log(vm.list)


                        if (vm.list != null) {
                            var filteredData = null;
                            var orderedData = null;
                            if (params != null) {
                                if (params.filter()) {
                                    filteredData = $filter('filter')(vm.list, params.filter())
                                }
                                else {
                                    filteredData = vm.list;
                                }
                                if (params.sorting()) {
                                    orderedData = $filter('orderBy')(filteredData, params.orderBy());
                                }
                                else {
                                    orderedData = filteredData;
                                }

                                params.total(orderedData.length);
                                console.log(orderedData.length);
                                var returnData = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count())
                                return returnData;
                            }
                            else {
                                return vm.list;
                            }
                        }
                    }
                })
        }

    }
})();
