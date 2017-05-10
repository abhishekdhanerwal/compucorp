describe('search music service' , function () {

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

    var artistList = {
        "artists" : {
            "href" : "https://api.spotify.com/v1/search?query=Justin&type=artist&offset=0&limit=20",
            "items" : [ {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/1uNFoZAHBGtllmzznpCI3s"
                },
                "followers" : {
                    "href" : null,
                    "total" : 9374547
                },
                "genres" : [ "canadian pop", "dance pop", "pop", "pop christmas", "post-teen pop" ],
                "href" : "https://api.spotify.com/v1/artists/1uNFoZAHBGtllmzznpCI3s",
                "id" : "1uNFoZAHBGtllmzznpCI3s",
                "images" : [ {
                    "height" : 1000,
                    "url" : "https://i.scdn.co/image/5c3cf2ee3494e2da71dcf26303202ec491b26213",
                    "width" : 1000
                }, {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/2e451efa87b706098553583cffac821b7ebac450",
                    "width" : 640
                }, {
                    "height" : 200,
                    "url" : "https://i.scdn.co/image/ca283ddea2afc65c15d802d45ee3d3fd255ab4e2",
                    "width" : 200
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ce41eb4beaad8d07fd55a68aba16b27e341a2e4f",
                    "width" : 64
                } ],
                "name" : "Justin Bieber",
                "popularity" : 94,
                "type" : "artist",
                "uri" : "spotify:artist:1uNFoZAHBGtllmzznpCI3s"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7"
                },
                "followers" : {
                    "href" : null,
                    "total" : 3401791
                },
                "genres" : [ "boy band", "dance pop", "pop", "pop rap", "post-teen pop", "r&b" ],
                "href" : "https://api.spotify.com/v1/artists/31TPClRtHm23RisEBtV3X7",
                "id" : "31TPClRtHm23RisEBtV3X7",
                "images" : [ {
                    "height" : 456,
                    "url" : "https://i.scdn.co/image/f56057503a57675bda6ce322c5e455064e63312b",
                    "width" : 496
                }, {
                    "height" : 184,
                    "url" : "https://i.scdn.co/image/481fe1d94210e6507062ef061dffd2560516d612",
                    "width" : 200
                }, {
                    "height" : 59,
                    "url" : "https://i.scdn.co/image/484d17e9a3eee3f8608702ab38bfc71ed6970c3c",
                    "width" : 64
                } ],
                "name" : "Justin Timberlake",
                "popularity" : 82,
                "type" : "artist",
                "uri" : "spotify:artist:31TPClRtHm23RisEBtV3X7"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
                },
                "followers" : {
                    "href" : null,
                    "total" : 274690
                },
                "genres" : [ "contemporary country", "country", "country christmas", "country road", "modern country rock", "redneck" ],
                "href" : "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
                "id" : "30e8DmahrEamvLbFRPdWmk",
                "images" : [ {
                    "height" : 1000,
                    "url" : "https://i.scdn.co/image/0a17bb07a782da158f7d04b626ccd7c34b548a22",
                    "width" : 1000
                }, {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/2cb359b5fb3cfdf737fdbdee81ae01247abbb61f",
                    "width" : 640
                }, {
                    "height" : 200,
                    "url" : "https://i.scdn.co/image/f66c208f35dc672cfe91ae5ace0c5c5d6c542e1d",
                    "width" : 200
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/6c2cef1d1c1b7edfd914549b56e509c5bae1a546",
                    "width" : 64
                } ],
                "name" : "Justin Moore",
                "popularity" : 67,
                "type" : "artist",
                "uri" : "spotify:artist:30e8DmahrEamvLbFRPdWmk"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/2snm3HmsnDUDxbIChdl2Oj"
                },
                "followers" : {
                    "href" : null,
                    "total" : 19886
                },
                "genres" : [ "hollywood" ],
                "href" : "https://api.spotify.com/v1/artists/2snm3HmsnDUDxbIChdl2Oj",
                "id" : "2snm3HmsnDUDxbIChdl2Oj",
                "images" : [ {
                    "height" : 352,
                    "url" : "https://i.scdn.co/image/e1206ba5c89c640cba7a00ca8409584b6262b0d2",
                    "width" : 352
                }, {
                    "height" : 200,
                    "url" : "https://i.scdn.co/image/4925e5ba9a21f71a0a16704a7f81fc2e79405802",
                    "width" : 200
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/ef24eeb2c83655bed335e9dda1f0a7bf87c06380",
                    "width" : 64
                } ],
                "name" : "Justin Hurwitz",
                "popularity" : 72,
                "type" : "artist",
                "uri" : "spotify:artist:2snm3HmsnDUDxbIChdl2Oj"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/14zUHaJZo1mnYtn6IBRaRP"
                },
                "followers" : {
                    "href" : null,
                    "total" : 141033
                },
                "genres" : [ "latin", "latin hip hop", "reggaeton", "reggaeton flow", "tropical" ],
                "href" : "https://api.spotify.com/v1/artists/14zUHaJZo1mnYtn6IBRaRP",
                "id" : "14zUHaJZo1mnYtn6IBRaRP",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/8e4ab22832b6c8e43d105692a832e775b75680b3",
                    "width" : 640
                }, {
                    "height" : 320,
                    "url" : "https://i.scdn.co/image/eb46528a93c8c229bc90e54a00bb1c3506686f6b",
                    "width" : 320
                }, {
                    "height" : 160,
                    "url" : "https://i.scdn.co/image/bf2b70f585f44dcf287fce277234f384720093ee",
                    "width" : 160
                } ],
                "name" : "Justin Quiles",
                "popularity" : 73,
                "type" : "artist",
                "uri" : "spotify:artist:14zUHaJZo1mnYtn6IBRaRP"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/5Vu87j6vCvfwc7FNVGnBwk"
                },
                "followers" : {
                    "href" : null,
                    "total" : 9239
                },
                "genres" : [ "bass trap", "deep underground hip hop", "underground pop rap" ],
                "href" : "https://api.spotify.com/v1/artists/5Vu87j6vCvfwc7FNVGnBwk",
                "id" : "5Vu87j6vCvfwc7FNVGnBwk",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/0db85aa259a99430b639e2536922521a0836af78",
                    "width" : 640
                }, {
                    "height" : 320,
                    "url" : "https://i.scdn.co/image/98e724bf66b2bfade26f10684adcdf0dddbe8063",
                    "width" : 320
                }, {
                    "height" : 160,
                    "url" : "https://i.scdn.co/image/9f154d2dc81f5a8cbdef368bb3edb0bf64e67270",
                    "width" : 160
                } ],
                "name" : "Justin Stone",
                "popularity" : 52,
                "type" : "artist",
                "uri" : "spotify:artist:5Vu87j6vCvfwc7FNVGnBwk"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/4MYUIgtNTRdEfksW6IwvAe"
                },
                "followers" : {
                    "href" : null,
                    "total" : 84
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/4MYUIgtNTRdEfksW6IwvAe",
                "id" : "4MYUIgtNTRdEfksW6IwvAe",
                "images" : [ ],
                "name" : "Justin Bohon",
                "popularity" : 51,
                "type" : "artist",
                "uri" : "spotify:artist:4MYUIgtNTRdEfksW6IwvAe"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/3znXuXT3xkCtjgOxXBBVnq"
                },
                "followers" : {
                    "href" : null,
                    "total" : 49760
                },
                "genres" : [ "alternative country", "country rock", "deep new americana", "folk", "indie folk", "modern blues", "new americana", "outlaw country", "progressive bluegrass", "roots rock", "singer-songwriter", "stomp and holler", "texas country", "traditional folk" ],
                "href" : "https://api.spotify.com/v1/artists/3znXuXT3xkCtjgOxXBBVnq",
                "id" : "3znXuXT3xkCtjgOxXBBVnq",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/b49bb959a34661d826e1a7314c5b2e060a60976e",
                    "width" : 640
                }, {
                    "height" : 320,
                    "url" : "https://i.scdn.co/image/01fb2b07dd2935368384cdbad55cb742e05a0f4f",
                    "width" : 320
                }, {
                    "height" : 160,
                    "url" : "https://i.scdn.co/image/eab1c92f49cd10b2f94ce51ad18babdef16fc2f1",
                    "width" : 160
                } ],
                "name" : "Justin Townes Earle",
                "popularity" : 50,
                "type" : "artist",
                "uri" : "spotify:artist:3znXuXT3xkCtjgOxXBBVnq"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/1NyxTiCivDmzgFWYD1V01m"
                },
                "followers" : {
                    "href" : null,
                    "total" : 2392
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/1NyxTiCivDmzgFWYD1V01m",
                "id" : "1NyxTiCivDmzgFWYD1V01m",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/784de4f7237812afb0eaa5b89c54d3062d4dcc0c",
                    "width" : 640
                }, {
                    "height" : 320,
                    "url" : "https://i.scdn.co/image/8f80a34473855c4a6707a826318b652880f7e6cc",
                    "width" : 320
                }, {
                    "height" : 160,
                    "url" : "https://i.scdn.co/image/7f8d855e4039c083840c03ecb419679791c53d3c",
                    "width" : 160
                } ],
                "name" : "Justin Caruso",
                "popularity" : 51,
                "type" : "artist",
                "uri" : "spotify:artist:1NyxTiCivDmzgFWYD1V01m"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/5gbVaSSV20SRy9a4YyCglk"
                },
                "followers" : {
                    "href" : null,
                    "total" : 774
                },
                "genres" : [ "lift kit" ],
                "href" : "https://api.spotify.com/v1/artists/5gbVaSSV20SRy9a4YyCglk",
                "id" : "5gbVaSSV20SRy9a4YyCglk",
                "images" : [ ],
                "name" : "Justin Adams",
                "popularity" : 44,
                "type" : "artist",
                "uri" : "spotify:artist:5gbVaSSV20SRy9a4YyCglk"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/1uquUYtkdKei0zuhBY9P0t"
                },
                "followers" : {
                    "href" : null,
                    "total" : 56306
                },
                "genres" : [ "acoustic pop", "canadian pop", "neo mellow" ],
                "href" : "https://api.spotify.com/v1/artists/1uquUYtkdKei0zuhBY9P0t",
                "id" : "1uquUYtkdKei0zuhBY9P0t",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/b622679322365933458b083f396680b65b5ab15f",
                    "width" : 640
                }, {
                    "height" : 320,
                    "url" : "https://i.scdn.co/image/b7ce73afcf6dfa8d0b3463f7fdb99a70dcce0d05",
                    "width" : 320
                }, {
                    "height" : 160,
                    "url" : "https://i.scdn.co/image/aa542c9969155eb408fcb3f8c058decad70d1f9a",
                    "width" : 160
                } ],
                "name" : "Justin Nozuka",
                "popularity" : 46,
                "type" : "artist",
                "uri" : "spotify:artist:1uquUYtkdKei0zuhBY9P0t"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/13rHmjtJmlIJ2aDyJc7CLV"
                },
                "followers" : {
                    "href" : null,
                    "total" : 11324
                },
                "genres" : [ "indie folk", "stomp and holler" ],
                "href" : "https://api.spotify.com/v1/artists/13rHmjtJmlIJ2aDyJc7CLV",
                "id" : "13rHmjtJmlIJ2aDyJc7CLV",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/cd973e64e45b1a9eac469aca8827a2296dda74f5",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/9d3c8176659655e687eb5d0d9069e4c5f0a040a5",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/fbf8655cf814e9c8383b14b0cde17661753170c6",
                    "width" : 64
                } ],
                "name" : "Justin Vernon",
                "popularity" : 42,
                "type" : "artist",
                "uri" : "spotify:artist:13rHmjtJmlIJ2aDyJc7CLV"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/5k5eiijuHxrGwXp2Pz37GZ"
                },
                "followers" : {
                    "href" : null,
                    "total" : 10068
                },
                "genres" : [ "deep disco house", "house" ],
                "href" : "https://api.spotify.com/v1/artists/5k5eiijuHxrGwXp2Pz37GZ",
                "id" : "5k5eiijuHxrGwXp2Pz37GZ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/55a8eb6065dda83de99e9b7b8ebe4a7b2235ace7",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/a8881b14dc2337bb2ecc152b5ec4611335229700",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/35e7bdd0ee257b3890f2be986dbb0b4cb1ca6f3b",
                    "width" : 64
                } ],
                "name" : "Justin Jay",
                "popularity" : 43,
                "type" : "artist",
                "uri" : "spotify:artist:5k5eiijuHxrGwXp2Pz37GZ"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/4FN8WHqUbwkd97WEjoCu7B"
                },
                "followers" : {
                    "href" : null,
                    "total" : 25335
                },
                "genres" : [ "deep disco house", "deep groove house", "house" ],
                "href" : "https://api.spotify.com/v1/artists/4FN8WHqUbwkd97WEjoCu7B",
                "id" : "4FN8WHqUbwkd97WEjoCu7B",
                "images" : [ {
                    "height" : 667,
                    "url" : "https://i.scdn.co/image/af72a0c3cbb3b806eac37ee5977306ca9e055e4c",
                    "width" : 1000
                }, {
                    "height" : 427,
                    "url" : "https://i.scdn.co/image/1bd8301366c02a063b322fb843a9afec73975da5",
                    "width" : 640
                }, {
                    "height" : 133,
                    "url" : "https://i.scdn.co/image/dfa4b870e7fd09933e9fb42b13ec5bd3c18409da",
                    "width" : 200
                }, {
                    "height" : 43,
                    "url" : "https://i.scdn.co/image/e9436ee8c3c32de48351c341efdc2213e7d83b65",
                    "width" : 64
                } ],
                "name" : "Justin Martin",
                "popularity" : 43,
                "type" : "artist",
                "uri" : "spotify:artist:4FN8WHqUbwkd97WEjoCu7B"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/7MFJyevu6jq0shwDuVLymu"
                },
                "followers" : {
                    "href" : null,
                    "total" : 5458
                },
                "genres" : [ "deep big room", "electro house" ],
                "href" : "https://api.spotify.com/v1/artists/7MFJyevu6jq0shwDuVLymu",
                "id" : "7MFJyevu6jq0shwDuVLymu",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/bbe18e86b6e513f770dee750b591342b53125cf3",
                    "width" : 640
                }, {
                    "height" : 320,
                    "url" : "https://i.scdn.co/image/9db6e981e6dc30467800c8332ab05c552469b04f",
                    "width" : 320
                }, {
                    "height" : 160,
                    "url" : "https://i.scdn.co/image/d95c4dfb5e4d75e069647d2e222a7ab0dd384211",
                    "width" : 160
                } ],
                "name" : "Justin Mylo",
                "popularity" : 49,
                "type" : "artist",
                "uri" : "spotify:artist:7MFJyevu6jq0shwDuVLymu"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/48oumVt48B4EWw8mgY9mGJ"
                },
                "followers" : {
                    "href" : null,
                    "total" : 588
                },
                "genres" : [ "deep new americana" ],
                "href" : "https://api.spotify.com/v1/artists/48oumVt48B4EWw8mgY9mGJ",
                "id" : "48oumVt48B4EWw8mgY9mGJ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/8fd5383d550da83234e59ca62f648b44c7967654",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/16117f454b5ff464419ea31312c42176f8f32dfe",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/787193e64452b78bc7fe53f53df937dc1a7ef4b3",
                    "width" : 64
                } ],
                "name" : "Justin Peter Kinkel-Schuster",
                "popularity" : 37,
                "type" : "artist",
                "uri" : "spotify:artist:48oumVt48B4EWw8mgY9mGJ"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/7mSrCdzFqdUyrOGJuEeUmT"
                },
                "followers" : {
                    "href" : null,
                    "total" : 1137
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/7mSrCdzFqdUyrOGJuEeUmT",
                "id" : "7mSrCdzFqdUyrOGJuEeUmT",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/849eeff635351fe2ad7ba5a09f9259874353b813",
                    "width" : 640
                }, {
                    "height" : 300,
                    "url" : "https://i.scdn.co/image/8ff3f1e4f608de9759173a5f33485fab6f27e9fe",
                    "width" : 300
                }, {
                    "height" : 64,
                    "url" : "https://i.scdn.co/image/c349b3ac3c4805026c30b1e01410bae4ecc34bfc",
                    "width" : 64
                } ],
                "name" : "Justin Johnson",
                "popularity" : 33,
                "type" : "artist",
                "uri" : "spotify:artist:7mSrCdzFqdUyrOGJuEeUmT"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/0TFdkHvlyUVl9zrb4seHxJ"
                },
                "followers" : {
                    "href" : null,
                    "total" : 6859
                },
                "genres" : [ "big room", "deep big room" ],
                "href" : "https://api.spotify.com/v1/artists/0TFdkHvlyUVl9zrb4seHxJ",
                "id" : "0TFdkHvlyUVl9zrb4seHxJ",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/6fd53fbebb176ed6da96e09f3e7b41c2afa523c3",
                    "width" : 640
                }, {
                    "height" : 320,
                    "url" : "https://i.scdn.co/image/c7ec5681a458fb32fe77d9a49935b178320e8fac",
                    "width" : 320
                }, {
                    "height" : 160,
                    "url" : "https://i.scdn.co/image/da4f9c5e1fa11d36d1ffadb68b6a5e956415421a",
                    "width" : 160
                } ],
                "name" : "Justin Prime",
                "popularity" : 45,
                "type" : "artist",
                "uri" : "spotify:artist:0TFdkHvlyUVl9zrb4seHxJ"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/4cP99YA6Ju4yQyBPiu9DPf"
                },
                "followers" : {
                    "href" : null,
                    "total" : 14
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/4cP99YA6Ju4yQyBPiu9DPf",
                "id" : "4cP99YA6Ju4yQyBPiu9DPf",
                "images" : [ ],
                "name" : "Justin Ringle",
                "popularity" : 35,
                "type" : "artist",
                "uri" : "spotify:artist:4cP99YA6Ju4yQyBPiu9DPf"
            }, {
                "external_urls" : {
                    "spotify" : "https://open.spotify.com/artist/5x2u5vpKBhviWQlni8VM8L"
                },
                "followers" : {
                    "href" : null,
                    "total" : 913
                },
                "genres" : [ ],
                "href" : "https://api.spotify.com/v1/artists/5x2u5vpKBhviWQlni8VM8L",
                "id" : "5x2u5vpKBhviWQlni8VM8L",
                "images" : [ {
                    "height" : 640,
                    "url" : "https://i.scdn.co/image/ce54ce62b160a0b380e315627dfa048b7cf6f658",
                    "width" : 640
                }, {
                    "height" : 320,
                    "url" : "https://i.scdn.co/image/769f8f250018afc1beba276a9818dbc59080e3be",
                    "width" : 320
                }, {
                    "height" : 160,
                    "url" : "https://i.scdn.co/image/3c139404cbefc9fe3bcd2d2526ec20001f03205b",
                    "width" : 160
                } ],
                "name" : "Justin Oh",
                "popularity" : 41,
                "type" : "artist",
                "uri" : "spotify:artist:5x2u5vpKBhviWQlni8VM8L"
            } ],
            "limit" : 20,
            "next" : "https://api.spotify.com/v1/search?query=Justin&type=artist&offset=20&limit=20",
            "offset" : 0,
            "previous" : null,
            "total" : 1752
        }
    };

    var name = 'Justin';
    var searchType;
    var searchMusicFactory;
    var $httpBackend;

    beforeEach(angular.mock.module('musicApp.search'));

    beforeEach(angular.mock.inject(function (_searchMusicFactory_ , _$httpBackend_) {
        searchMusicFactory = _searchMusicFactory_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return artist list', function () {
        searchType = 'Artist';

        $httpBackend.whenGET("https://api.spotify.com/v1/search?q="+name+"&type="+searchType)
            .respond(200 , artistList);

        searchMusicFactory.getData(name , searchType)
            .then(function (data) {
                response = data;
            });

        $httpBackend.flush();
        expect(response.data).toEqual(artistList);

    });

    it('should return album list', function () {
        searchType = 'Album';

        $httpBackend.whenGET("https://api.spotify.com/v1/search?q="+name+"&type="+searchType)
            .respond(200 , albumList);

        searchMusicFactory.getData(name , searchType)
            .then(function (data) {
                response = data;
            });

        $httpBackend.flush();
        expect(response.data).toEqual(albumList);

    });

});
