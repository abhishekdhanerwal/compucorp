describe('Searchh Music Controller' , function () {

    var albumList = {
        "albums" : {
            "href" : "https://api.spotify.com/v1/search?query=Justin&type=album&offset=0&limit=20",
            "items" : [ {
                "album_type" : "single",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4V8Sr092TqfHkfAA5fXXqG"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4V8Sr092TqfHkfAA5fXXqG",
                    "id" : "4V8Sr092TqfHkfAA5fXXqG",
                    "name" : "Luis Fonsi",
                    "type" : "artist",
                    "uri" : "spotify:artist:4V8Sr092TqfHkfAA5fXXqG"
                }, {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/4VMYDCV2IEDYJArk749S6m"
                    },
                    "href" : "https://api.spotify.com/v1/artists/4VMYDCV2IEDYJArk749S6m",
                    "id" : "4VMYDCV2IEDYJArk749S6m",
                    "name" : "Daddy Yankee",
                    "type" : "artist",
                    "uri" : "spotify:artist:4VMYDCV2IEDYJArk749S6m"
                } ],
                "available_markets" : [ "CA", "MX", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3Gq2Dme9nesdgoqNNlcN8O"
                },
                "href" : "https://api.spotify.com/v1/albums/3Gq2Dme9nesdgoqNNlcN8O",
                "id" : "3Gq2Dme9nesdgoqNNlcN8O",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/edcc53317411b5e025e920857fb0f871c4087ce9",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/ebdc2f8abd0846f609e8b81a6c208935a3bd6eea",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/01ca097819d504ee54d22bf46a2cded3e09bb7e3",
                    "width" : 64
                } ],
                "name" : "Despacito Feat. Justin Bieber (Remix)",
                "type" : "album",
                "uri" : "spotify:album:3Gq2Dme9nesdgoqNNlcN8O"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
                    "id" : "1uNFoZAHBGtllmzznpCI3s",
                    "name" : "Justin Bieber",
                    "type" : "artist",
                    "uri" : "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
                } ],
                "available_markets" : [ "CA", "MX", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6Fr2rQkZ383FcMqFyT7yPr"
                },
                "href" : "https://api.spotify.com/v1/albums/6Fr2rQkZ383FcMqFyT7yPr",
                "id" : "6Fr2rQkZ383FcMqFyT7yPr",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/8b47495ce0c4a341f7196f70bcf4361e6257c1a0",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/da1e8958b6260e832660d0c5f3c80e9569c388c8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/478dbfd0e579dee7392707b9a6848faff0cdfefd",
                    "width" : 64
                } ],
                "name" : "Purpose (Deluxe)",
                "type" : "album",
                "uri" : "spotify:album:6Fr2rQkZ383FcMqFyT7yPr"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
                    },
                    "href" : "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
                    "id" : "30e8DmahrEamvLbFRPdWmk",
                    "name" : "Justin Moore",
                    "type" : "artist",
                    "uri" : "spotify:artist:30e8DmahrEamvLbFRPdWmk"
                } ],
                "available_markets" : [ "CA", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7yI8ppmq1tmqF09Qbi1tcj"
                },
                "href" : "https://api.spotify.com/v1/albums/7yI8ppmq1tmqF09Qbi1tcj",
                "id" : "7yI8ppmq1tmqF09Qbi1tcj",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/cc65b0a24abfe3b3e51bc062d440878d64cf4660",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/9da3570fed63d82cda299e840310b832da92946c",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/9d7929c942285d940966195c624fa9d07318a250",
                    "width" : 64
                } ],
                "name" : "Justin Moore",
                "type" : "album",
                "uri" : "spotify:album:7yI8ppmq1tmqF09Qbi1tcj"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
                    },
                    "href" : "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
                    "id" : "30e8DmahrEamvLbFRPdWmk",
                    "name" : "Justin Moore",
                    "type" : "artist",
                    "uri" : "spotify:artist:30e8DmahrEamvLbFRPdWmk"
                } ],
                "available_markets" : [ "CA", "MX", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0S5QmbBEftEpSgPd9uYgQv"
                },
                "href" : "https://api.spotify.com/v1/albums/0S5QmbBEftEpSgPd9uYgQv",
                "id" : "0S5QmbBEftEpSgPd9uYgQv",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/c211669503d2cfef3e0df50bc72c96b6f2dced61",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/f31263e0cae33ebb4e14944fae859e65d7696997",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/5e0ebeb1d8d635b3398107eff59c24546397d182",
                    "width" : 64
                } ],
                "name" : "Kinda Don't Care",
                "type" : "album",
                "uri" : "spotify:album:0S5QmbBEftEpSgPd9uYgQv"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
                    },
                    "href" : "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
                    "id" : "30e8DmahrEamvLbFRPdWmk",
                    "name" : "Justin Moore",
                    "type" : "artist",
                    "uri" : "spotify:artist:30e8DmahrEamvLbFRPdWmk"
                } ],
                "available_markets" : [ "CA", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/43WYprY30K1r0pbDmf3amq"
                },
                "href" : "https://api.spotify.com/v1/albums/43WYprY30K1r0pbDmf3amq",
                "id" : "43WYprY30K1r0pbDmf3amq",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/f08552a68497676bb27216c4278982de1dcfa297",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/e5fa8686ae02e7c38a28f4c589eca2f174afe9ca",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/62f03bb61cc6e57b72b6bac82f239fc726390760",
                    "width" : 64
                } ],
                "name" : "Outlaws Like Me",
                "type" : "album",
                "uri" : "spotify:album:43WYprY30K1r0pbDmf3amq"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
                    },
                    "href" : "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
                    "id" : "31TPClRtHm23RisEBtV3X7",
                    "name" : "Justin Timberlake",
                    "type" : "artist",
                    "uri" : "spotify:artist:31TPClRtHm23RisEBtV3X7"
                } ],
                "available_markets" : [ "AD", "AR", "AU", "BE", "BG", "BO", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY", "AD", "AR", "AU", "BE", "BG", "BO", "CA", "CL", "CO", "CR", "CY", "CZ", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6QPkyl04rXwTGlGlcYaRoW"
                },
                "href" : "https://api.spotify.com/v1/albums/6QPkyl04rXwTGlGlcYaRoW",
                "id" : "6QPkyl04rXwTGlGlcYaRoW",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ac3a183dbf102423f35cc9f23276f0aad2e9e342",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/459c6b6050e15696db9b6fafe630379ed9838c73",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/c53733df58eebc2f00ceeb447115c8bd8029e41a",
                    "width" : 64
                } ],
                "name" : "Justified",
                "type" : "album",
                "uri" : "spotify:album:6QPkyl04rXwTGlGlcYaRoW"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
                    "id" : "1uNFoZAHBGtllmzznpCI3s",
                    "name" : "Justin Bieber",
                    "type" : "artist",
                    "uri" : "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
                } ],
                "available_markets" : [ "CA", "MX", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7Cz0XcQzoxUi7L7sfgXLml"
                },
                "href" : "https://api.spotify.com/v1/albums/7Cz0XcQzoxUi7L7sfgXLml",
                "id" : "7Cz0XcQzoxUi7L7sfgXLml",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/5e670cb5b9ac3d63f7a5be767833aefa89fde421",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/c98cb71e58845ae049d03b5ef897e68167dd418b",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/47d201ed2e764bbc4e2d970306a080ae3dd68580",
                    "width" : 64
                } ],
                "name" : "Journals",
                "type" : "album",
                "uri" : "spotify:album:7Cz0XcQzoxUi7L7sfgXLml"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
                    "id" : "1uNFoZAHBGtllmzznpCI3s",
                    "name" : "Justin Bieber",
                    "type" : "artist",
                    "uri" : "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
                } ],
                "available_markets" : [ "CA", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/3BmcYMh0KYsimWL6p2gPa9"
                },
                "href" : "https://api.spotify.com/v1/albums/3BmcYMh0KYsimWL6p2gPa9",
                "id" : "3BmcYMh0KYsimWL6p2gPa9",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/4a334e8018ca1df508e1ba39e6bf84af656f3476",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/cb0d278295235a24110f48ba10b080d2b5e46fdf",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/f1292cc92e5da710eb92c4ab531c2250966df2bc",
                    "width" : 64
                } ],
                "name" : "My World 2.0",
                "type" : "album",
                "uri" : "spotify:album:3BmcYMh0KYsimWL6p2gPa9"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
                    },
                    "href" : "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
                    "id" : "31TPClRtHm23RisEBtV3X7",
                    "name" : "Justin Timberlake",
                    "type" : "artist",
                    "uri" : "spotify:artist:31TPClRtHm23RisEBtV3X7"
                } ],
                "available_markets" : [ "JP", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/41br7lBSZOr9RjJAjk0om6"
                },
                "href" : "https://api.spotify.com/v1/albums/41br7lBSZOr9RjJAjk0om6",
                "id" : "41br7lBSZOr9RjJAjk0om6",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/25d8e65d6bdd9b2120c3b449eb1a47f5131937ae",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/7ac8085fc9fa19d0b8105df6a6711e77b89ad130",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/69edc8f2fbdeb7e7c0ea58ef84b4673ff8672dcd",
                    "width" : 64
                } ],
                "name" : "The 20/20 Experience",
                "type" : "album",
                "uri" : "spotify:album:41br7lBSZOr9RjJAjk0om6"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
                    },
                    "href" : "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
                    "id" : "30e8DmahrEamvLbFRPdWmk",
                    "name" : "Justin Moore",
                    "type" : "artist",
                    "uri" : "spotify:artist:30e8DmahrEamvLbFRPdWmk"
                } ],
                "available_markets" : [ "CA", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/7uCnHbfLZEdH1733LZ2i2F"
                },
                "href" : "https://api.spotify.com/v1/albums/7uCnHbfLZEdH1733LZ2i2F",
                "id" : "7uCnHbfLZEdH1733LZ2i2F",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/222ead290bfc05b93ade37951c73846343aa71a0",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/d5727d1268323fc2a0ad3eb4cce62772fe306ad0",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/b830758a18e11f561ca62977affe840a88d7cb6f",
                    "width" : 64
                } ],
                "name" : "Off The Beaten Path (Deluxe Edition)",
                "type" : "album",
                "uri" : "spotify:album:7uCnHbfLZEdH1733LZ2i2F"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/14zUHaJZo1mnYtn6IBRaRP"
                    },
                    "href" : "https://api.spotify.com/v1/artists/14zUHaJZo1mnYtn6IBRaRP",
                    "id" : "14zUHaJZo1mnYtn6IBRaRP",
                    "name" : "Justin Quiles",
                    "type" : "artist",
                    "uri" : "spotify:artist:14zUHaJZo1mnYtn6IBRaRP"
                } ],
                "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0vBFa64sBqdd26KKIj4SKZ"
                },
                "href" : "https://api.spotify.com/v1/albums/0vBFa64sBqdd26KKIj4SKZ",
                "id" : "0vBFa64sBqdd26KKIj4SKZ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/2eb6977893a8cddc0688994c75fd5c7c0437a16e",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/04b4f4d0cb9a4aeb9736968132d5ce8e011a73fc",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/134a058178c59a515a8fa06b0e90274f130026fa",
                    "width" : 64
                } ],
                "name" : "La Promesa",
                "type" : "album",
                "uri" : "spotify:album:0vBFa64sBqdd26KKIj4SKZ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
                    },
                    "href" : "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
                    "id" : "31TPClRtHm23RisEBtV3X7",
                    "name" : "Justin Timberlake",
                    "type" : "artist",
                    "uri" : "spotify:artist:31TPClRtHm23RisEBtV3X7"
                } ],
                "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "CA", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GR", "GT", "HK", "HN", "HU", "ID", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/2scB1uhcCI1TSf6b9TCZK3"
                },
                "href" : "https://api.spotify.com/v1/albums/2scB1uhcCI1TSf6b9TCZK3",
                "id" : "2scB1uhcCI1TSf6b9TCZK3",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/7e300158273aae9b76d65027efe8821ca0164501",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/628c8c21b71991cf21df2c0b2dbe701e812a1389",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/bcb922edc1bbf86d743c2794f1313a9e061dd2f8",
                    "width" : 64
                } ],
                "name" : "FutureSex/LoveSounds",
                "type" : "album",
                "uri" : "spotify:album:2scB1uhcCI1TSf6b9TCZK3"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
                    "id" : "1uNFoZAHBGtllmzznpCI3s",
                    "name" : "Justin Bieber",
                    "type" : "artist",
                    "uri" : "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
                } ],
                "available_markets" : [ "CA", "MX", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/70f70xLCpH7wHaVvB2oZT9"
                },
                "href" : "https://api.spotify.com/v1/albums/70f70xLCpH7wHaVvB2oZT9",
                "id" : "70f70xLCpH7wHaVvB2oZT9",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/821b9cbf1cbe847fe47f9183ddfff262e878be10",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/f8354c8020852930b2e6a82f1b666751307e1657",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/7a166b3829ea9ae5f6ca6ca92dede81dbdafb833",
                    "width" : 64
                } ],
                "name" : "Believe (Deluxe Edition)",
                "type" : "album",
                "uri" : "spotify:album:70f70xLCpH7wHaVvB2oZT9"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
                    "id" : "1uNFoZAHBGtllmzznpCI3s",
                    "name" : "Justin Bieber",
                    "type" : "artist",
                    "uri" : "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
                } ],
                "available_markets" : [ "CA", "MX", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6eknhm96vRigjwfcl49xKb"
                },
                "href" : "https://api.spotify.com/v1/albums/6eknhm96vRigjwfcl49xKb",
                "id" : "6eknhm96vRigjwfcl49xKb",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/a17cf84e7a0512a31611e39744be383e61b8e9ed",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/085e736bb2fb18937e34351cfec550451c84173b",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/1ee531ede2a0f55ad3bd40981f2f35f92d9e3b10",
                    "width" : 64
                } ],
                "name" : "Believe",
                "type" : "album",
                "uri" : "spotify:album:6eknhm96vRigjwfcl49xKb"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
                    },
                    "href" : "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
                    "id" : "30e8DmahrEamvLbFRPdWmk",
                    "name" : "Justin Moore",
                    "type" : "artist",
                    "uri" : "spotify:artist:30e8DmahrEamvLbFRPdWmk"
                } ],
                "available_markets" : [ "CA", "MX", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5KUBh2MUh0UHViQFoGBLaJ"
                },
                "href" : "https://api.spotify.com/v1/albums/5KUBh2MUh0UHViQFoGBLaJ",
                "id" : "5KUBh2MUh0UHViQFoGBLaJ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/2ab85fd4174afbfabfdf6a006805caac1e9662dc",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/074243d11ace9ccba86416d4ee361ea411a2f8b8",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/116846068f41a36603515028d7f9a971482a6c79",
                    "width" : 64
                } ],
                "name" : "Kinda Don't Care (Deluxe Version)",
                "type" : "album",
                "uri" : "spotify:album:5KUBh2MUh0UHViQFoGBLaJ"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
                    },
                    "href" : "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
                    "id" : "31TPClRtHm23RisEBtV3X7",
                    "name" : "Justin Timberlake",
                    "type" : "artist",
                    "uri" : "spotify:artist:31TPClRtHm23RisEBtV3X7"
                } ],
                "available_markets" : [ "AD", "AR", "AT", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "US", "UY" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/51lCQxAHpJHuqvvK0z12zp"
                },
                "href" : "https://api.spotify.com/v1/albums/51lCQxAHpJHuqvvK0z12zp",
                "id" : "51lCQxAHpJHuqvvK0z12zp",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/791de92c6b18fef4cfc75c24119f7f95e5764ecd",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/a2e020d6f4cc4e119d0fc4b09ddb20a7f9f1a779",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/0181b8959e730728af8f59ad4242a6e561271aca",
                    "width" : 64
                } ],
                "name" : "FutureSex/LoveSounds",
                "type" : "album",
                "uri" : "spotify:album:51lCQxAHpJHuqvvK0z12zp"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/2snm3HmsnDUDxbIChdl2Oj"
                    },
                    "href" : "https://api.spotify.com/v1/artists/2snm3HmsnDUDxbIChdl2Oj",
                    "id" : "2snm3HmsnDUDxbIChdl2Oj",
                    "name" : "Justin Hurwitz",
                    "type" : "artist",
                    "uri" : "spotify:artist:2snm3HmsnDUDxbIChdl2Oj"
                } ],
                "available_markets" : [ "CA", "MX", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/0nQJa9mRvan1HnkwbYuxAN"
                },
                "href" : "https://api.spotify.com/v1/albums/0nQJa9mRvan1HnkwbYuxAN",
                "id" : "0nQJa9mRvan1HnkwbYuxAN",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/5dda7d3592f98c6d1fb01c131b8ec5539089bf72",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/484b8dc51fd6d5d019baf029fb9ed941816bac3d",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/12906ac3207025ab82997b8b5d956adf0db9f2be",
                    "width" : 64
                } ],
                "name" : "La La Land (Original Motion Picture Score)",
                "type" : "album",
                "uri" : "spotify:album:0nQJa9mRvan1HnkwbYuxAN"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
                    },
                    "href" : "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
                    "id" : "31TPClRtHm23RisEBtV3X7",
                    "name" : "Justin Timberlake",
                    "type" : "artist",
                    "uri" : "spotify:artist:31TPClRtHm23RisEBtV3X7"
                } ],
                "available_markets" : [ "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/6NTQnlMBfYpPhDy1sXtVRG"
                },
                "href" : "https://api.spotify.com/v1/albums/6NTQnlMBfYpPhDy1sXtVRG",
                "id" : "6NTQnlMBfYpPhDy1sXtVRG",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/6ed26afecc966b7806be46494a32f2c7d4704a6f",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/e0c3bd683f86675242cdb2d059d1b09e65161cd5",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/5c7653ae547018db06e893f37554dffa4514d2ff",
                    "width" : 64
                } ],
                "name" : "The 20/20 Experience - The Complete Experience",
                "type" : "album",
                "uri" : "spotify:album:6NTQnlMBfYpPhDy1sXtVRG"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
                    },
                    "href" : "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
                    "id" : "1uNFoZAHBGtllmzznpCI3s",
                    "name" : "Justin Bieber",
                    "type" : "artist",
                    "uri" : "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
                } ],
                "available_markets" : [ "MX", "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/1rG5TDs3jYh6OU753I54CI"
                },
                "href" : "https://api.spotify.com/v1/albums/1rG5TDs3jYh6OU753I54CI",
                "id" : "1rG5TDs3jYh6OU753I54CI",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/b88b48fa3133da4ae4ba0e8f0f673d00f77fada7",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/4dfe35f2fb71f4f4637d3559f4df24ea993b99e5",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/1e7631b5057943018f85164352a8164ac0c211bc",
                    "width" : 64
                } ],
                "name" : "My World",
                "type" : "album",
                "uri" : "spotify:album:1rG5TDs3jYh6OU753I54CI"
            }, {
                "album_type" : "album",
                "artists" : [ {
                    "external_urls" : {
                        "spotify" : "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
                    },
                    "href" : "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
                    "id" : "31TPClRtHm23RisEBtV3X7",
                    "name" : "Justin Timberlake",
                    "type" : "artist",
                    "uri" : "spotify:artist:31TPClRtHm23RisEBtV3X7"
                } ],
                "available_markets" : [ "US" ],
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/album/5w40WGuhOElvPC9Dy641Yw"
                },
                "href" : "https://api.spotify.com/v1/albums/5w40WGuhOElvPC9Dy641Yw",
                "id" : "5w40WGuhOElvPC9Dy641Yw",
                "images" : [ {
                    "height" : 636,
                    "url" : "https://i.scdn.co/image/7e6ae82cb23169cd5ee3f21154567c72692bde13",
                    "width" : 640
                }, {
                    "height" : 298,
                    "url" : "https://i.scdn.co/image/60a35deb89605600ffb702ce5308c0adb36c01c1",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/c556ca2790c8165daaddd72eedf128212c6a2e16",
                    "width" : 64
                } ],
                "name" : "The 20/20 Experience - 2 of 2",
                "type" : "album",
                "uri" : "spotify:album:5w40WGuhOElvPC9Dy641Yw"
            } ],
            "limit" : 20,
            "next" : "https://api.spotify.com/v1/search?query=Justin&type=album&offset=20&limit=20",
            "offset" : 0,
            "previous" : null,
            "total" : 4695
        }
    };


    var searchMusicFactory;
    var albumResponse = {};
    albumResponse.status = 200;
    albumResponse.data = albumList;

    var $controller;
    var $q;
    var $rootScope;
    var $this;
    var $httpBackend;

    beforeEach(angular.mock.module('musicApp.search'));
    beforeEach(angular.mock.inject(function(_$controller_  , _$q_ , _$rootScope_ , _searchMusicFactory_ , _$httpBackend_){

        $controller = _$controller_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        searchMusicFactory = _searchMusicFactory_;
        $httpBackend = _$httpBackend_;

    }));

    it('should show logged in user info' , function () {

        spyOn(searchMusicFactory , 'getData').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve(albumResponse.data);
            return deferred.promise;
        });

        $this = $controller('SearchMusicCtrl', {});
        vm = $this;
        vm.searchArtist();
        $rootScope.$apply();
        expect(vm.type).toBe('Album');
    });
});
