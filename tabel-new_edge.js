/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'sans-serif': '<link href=\'http://fonts.googleapis.com/css?family=Roboto:400,100,900,300\' rel=\'stylesheet\' type=\'text/css\'>',
            'monospace': '<link href=\'http://fonts.googleapis.com/css?family=Roboto:400,100,900,300\' rel=\'stylesheet\' type=\'text/css\'>',
            'Roboto': '<link href=\'http://fonts.googleapis.com/css?family=Roboto:400,100,900,300\' rel=\'stylesheet\' type=\'text/css\'>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bradul',
                            type: 'rect',
                            rect: ['0px', '0px', '219px', '56px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'l3x3',
                                type: 'rect',
                                rect: ['-9px', 'auto', '3px', '3px', 'auto', '0px'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'l4x4',
                                type: 'rect',
                                rect: ['5px', 'auto', '4px', '4px', 'auto', '0px'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'b-line',
                                type: 'rect',
                                rect: ['11px', 'auto', '197px', '2px', 'auto', '-4px'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'r4x4',
                                type: 'rect',
                                rect: ['auto', 'auto', '4px', '4px', '-4px', '0px'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'r3x3',
                                type: 'rect',
                                rect: ['auto', 'auto', '3px', '3px', '-9px', '0px'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'bradulet',
                                symbolName: 'bradulet',
                                type: 'rect',
                                rect: ['92', '0', '36', '56', 'auto', 'auto']
                            }]
                        },
                        {
                            id: 'merry',
                            type: 'rect',
                            rect: ['0px', '59px', '217px', '54px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [1,"rgba(255,255,255,1.00)","solid"],
                            c: [
                            {
                                id: 'mer',
                                type: 'text',
                                rect: ['0px', '0px', '100%', '56px', 'auto', 'auto'],
                                overflow: 'hidden',
                                text: "MERRY",
                                align: "center",
                                userClass: "edity",
                                font: ['Roboto', [62, "px"], "rgba(255,255,255,1.00)", "800", "none", "", "break-word", ""],
                                textStyle: ["0.6px", "0px", "56px", "0px"]
                            }]
                        },
                        {
                            id: 'chrismas',
                            type: 'rect',
                            rect: ['0px', '115px', '219px', '44px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(255, 255, 255)","none"],
                            c: [
                            {
                                id: 'chr',
                                type: 'text',
                                rect: ['0px', '0px', '100%', '44px', 'auto', 'auto'],
                                overflow: 'hidden',
                                text: "CHRISMAS",
                                align: "center",
                                userClass: "edity",
                                font: ['Roboto', [38, "px"], "rgba(255,255,255,1.00)", "100", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                                textStyle: ["", "", "44px", ""]
                            }]
                        },
                        {
                            id: 'txt-anim',
                            type: 'rect',
                            rect: ['0px', '159px', '217px', '54px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [1,"rgb(255, 255, 255)","solid"],
                            c: [
                            {
                                id: 'year',
                                type: 'text',
                                rect: ['0px', '56px', '100%', '56px', 'auto', 'auto'],
                                text: "YEAR",
                                align: "center",
                                userClass: "edity",
                                font: ['Roboto', [62, "px"], "rgba(255,255,255,1)", "900", "none solid rgb(255, 255, 255)", "normal", "break-word", ""],
                                textStyle: ["0.6px", "", "56px", ""]
                            },
                            {
                                id: 'new',
                                type: 'text',
                                rect: ['0px', '56px', '100%', '56px', 'auto', 'auto'],
                                text: "NEW",
                                align: "center",
                                userClass: "edity",
                                font: ['Roboto', [62, "px"], "rgba(255,255,255,1)", "900", "none solid rgb(255, 255, 255)", "normal", "break-word", ""],
                                textStyle: ["0.6px", "", "56px", ""]
                            },
                            {
                                id: 'happy',
                                type: 'text',
                                rect: ['0px', '56px', '100%', '56px', 'auto', 'auto'],
                                text: "HAPPY",
                                align: "center",
                                userClass: "edity",
                                font: ['Roboto', [62, "px"], "rgba(255,255,255,1)", "900", "none solid rgb(255, 255, 255)", "normal", "break-word", ""],
                                textStyle: ["0.6px", "", "56px", ""]
                            },
                            {
                                id: 'a',
                                type: 'text',
                                rect: ['0px', '56px', '100%', '56px', 'auto', 'auto'],
                                text: "A",
                                align: "center",
                                userClass: "edity",
                                font: ['Roboto', [62, "px"], "rgba(255,255,255,1)", "900", "none solid rgb(255, 255, 255)", "normal", "break-word", ""],
                                textStyle: ["0.6px", "", "56px", ""]
                            },
                            {
                                id: 'and',
                                type: 'text',
                                rect: ['0px', '56px', '100%', '56px', 'auto', 'auto'],
                                text: "AND",
                                align: "center",
                                userClass: "edity",
                                font: ['Roboto', [62, "px"], "rgba(255,255,255,1)", "900", "none solid rgb(255, 255, 255)", "normal", "break-word", ""],
                                textStyle: ["0.6px", "", "56px", ""]
                            },
                            {
                                id: 'nr-ani',
                                type: 'rect',
                                rect: ['0px', '56px', '219px', '56px', 'auto', 'auto'],
                                overflow: 'hidden',
                                fill: ["rgba(0,0,0,0.00)"],
                                stroke: [0,"rgb(255, 255, 255)","none"],
                                c: [
                                {
                                    id: '_2015',
                                    type: 'text',
                                    rect: ['0px', '0px', '100%', '56px', 'auto', 'auto'],
                                    overflow: 'hidden',
                                    text: "2015",
                                    align: "center",
                                    userClass: "edity",
                                    font: ['Roboto', [62, "px"], "rgba(255,255,255,1.00)", "900", "none solid rgb(0, 0, 0)", "normal", "break-word", ""],
                                    textStyle: ["0.6px", "", "56px", ""]
                                }]
                            }]
                        },
                        {
                            id: 'f-bottom',
                            type: 'rect',
                            rect: ['0px', '218px', '219px', '56px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(255, 255, 255)","none"],
                            c: [
                            {
                                id: 't-bottom',
                                type: 'image',
                                rect: ['0px', '0px', '219px', '56px', 'auto', 'auto'],
                                clip: 'rect(4px 219px 56px 0px)',
                                fill: ["rgba(0,0,0,0)",im+"t-bottom-02.svg",'0px','0px']
                            },
                            {
                                id: '_33',
                                type: 'rect',
                                rect: ['-9px', '0px', '3px', '3px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: '_44',
                                type: 'rect',
                                rect: ['5px', '0px', '4px', '4px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'tline',
                                type: 'rect',
                                rect: ['11px', '-4px', '197px', '2px', 'auto', 'auto'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: '_444',
                                type: 'rect',
                                rect: ['auto', '0px', '4px', '4px', '5px', 'auto'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: '_333',
                                type: 'rect',
                                rect: ['auto', '0px', '3px', '3px', '-9px', 'auto'],
                                fill: ["rgba(255,255,255,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'fb-like-bb',
                            type: 'rect',
                            rect: ['64px', 'auto', '93px', '20px', 'auto', '0px'],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(255, 255, 255)","none"],
                            userClass: "bookface"
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '219px', '310px', 'auto', 'auto'],
                            overflow: 'auto',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8800,
                    autoPlay: true,
                    labels: {
                        "LOOP": 1000
                    },
                    data: [
                        [
                            "eid142",
                            "top",
                            1000,
                            266,
                            "easeOutBounce",
                            "${nr-ani}",
                            '56px',
                            '0px'
                        ],
                        [
                            "eid143",
                            "top",
                            2933,
                            200,
                            "easeOutBounce",
                            "${nr-ani}",
                            '0px',
                            '-56px'
                        ],
                        [
                            "eid42",
                            "left",
                            600,
                            133,
                            "easeOutBounce",
                            "${_33}",
                            '-9px',
                            '0px'
                        ],
                        [
                            "eid18",
                            "left",
                            602,
                            133,
                            "easeOutBounce",
                            "${l3x3}",
                            '-9px',
                            '0px'
                        ],
                        [
                            "eid132",
                            "top",
                            5333,
                            267,
                            "easeOutBounce",
                            "${happy}",
                            '56px',
                            '0px'
                        ],
                        [
                            "eid133",
                            "top",
                            6333,
                            200,
                            "easeOutBounce",
                            "${happy}",
                            '0px',
                            '-56px'
                        ],
                        [
                            "eid17",
                            "left",
                            469,
                            133,
                            "easeOutBounce",
                            "${l4x4}",
                            '-4px',
                            '5px'
                        ],
                        [
                            "eid119",
                            "clip",
                            510,
                            223,
                            "linear",
                            "${t-bottom}",
                            [4,113,4,106],
                            [4,113,56,106],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid120",
                            "clip",
                            733,
                            267,
                            "linear",
                            "${t-bottom}",
                            [4,113,56,106],
                            [4,219,56,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid125",
                            "top",
                            3067,
                            266,
                            "easeOutBounce",
                            "${and}",
                            '56px',
                            '0px'
                        ],
                        [
                            "eid127",
                            "top",
                            4067,
                            200,
                            "easeOutBounce",
                            "${and}",
                            '0px',
                            '-56px'
                        ],
                        [
                            "eid75",
                            "top",
                            0,
                            733,
                            "easeOutBounce",
                            "${tline}",
                            '-4px',
                            '0px'
                        ],
                        [
                            "eid109",
                            "right",
                            469,
                            133,
                            "easeOutBounce",
                            "${r4x4}",
                            '-4px',
                            '5px'
                        ],
                        [
                            "eid126",
                            "top",
                            4200,
                            267,
                            "easeOutBounce",
                            "${a}",
                            '56px',
                            '0px'
                        ],
                        [
                            "eid128",
                            "top",
                            5200,
                            200,
                            "easeOutBounce",
                            "${a}",
                            '0px',
                            '-56px'
                        ],
                        [
                            "eid110",
                            "right",
                            602,
                            133,
                            "easeOutBounce",
                            "${r3x3}",
                            '-9px',
                            '0px'
                        ],
                        [
                            "eid136",
                            "top",
                            7600,
                            267,
                            "easeOutBounce",
                            "${year}",
                            '56px',
                            '0px'
                        ],
                        [
                            "eid137",
                            "top",
                            8600,
                            200,
                            "easeOutBounce",
                            "${year}",
                            '0px',
                            '-56px'
                        ],
                        [
                            "eid92",
                            "right",
                            600,
                            133,
                            "easeOutBounce",
                            "${_333}",
                            '-9px',
                            '0px'
                        ],
                        [
                            "eid134",
                            "top",
                            6466,
                            267,
                            "easeOutBounce",
                            "${new}",
                            '56px',
                            '0px'
                        ],
                        [
                            "eid135",
                            "top",
                            7467,
                            200,
                            "easeOutBounce",
                            "${new}",
                            '0px',
                            '-56px'
                        ],
                        [
                            "eid87",
                            "right",
                            467,
                            133,
                            "easeOutBounce",
                            "${_444}",
                            '-4px',
                            '5px'
                        ],
                        [
                            "eid41",
                            "left",
                            467,
                            133,
                            "easeOutBounce",
                            "${_44}",
                            '-4px',
                            '5px'
                        ],
                        [
                            "eid12",
                            "bottom",
                            2,
                            733,
                            "easeOutBounce",
                            "${b-line}",
                            '-4px',
                            '0px'
                        ]
                    ]
                }
            },
            "bradulet": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['16px', 'auto', '4px', '56px', 'auto', '0px'],
                            id: 'tulpina',
                            type: 'image',
                            clip: 'rect(56px 4px 56px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/tulpina.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '17px', '36px', '28px', 'auto', 'auto'],
                            id: '_1',
                            type: 'image',
                            clip: 'rect(0px 36px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/1.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '11px', '28px', '21px', 'auto', 'auto'],
                            id: '_2',
                            type: 'image',
                            clip: 'rect(0px 28px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/2.png', '0px', '0px']
                        },
                        {
                            rect: ['9px', '6px', '18px', '12px', 'auto', 'auto'],
                            id: '_3',
                            type: 'image',
                            clip: 'rect(0px 18px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/3.png', '0px', '0px']
                        },
                        {
                            rect: ['13px', '0px', '10px', '8px', 'auto', 'auto'],
                            id: '_42',
                            type: 'image',
                            clip: 'rect(0px 10px 0px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/4.png', '0px', '0px']
                        },
                        {
                            rect: ['1px', '92px', '8px', '8px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            boxShadow: ['inset', 1, -1, 2, 0, 'rgba(236,236,236,1.00)'],
                            id: 'righth',
                            stroke: [0, 'rgb(255, 255, 255)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '36px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 1001.7393578292,
                    autoPlay: true,
                    data: [
                        [
                            "eid30",
                            "clip",
                            735,
                            67,
                            "easeOutBounce",
                            "${_1}",
                            [0,36,0,0],
                            [0,36,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid26",
                            "clip",
                            868,
                            66,
                            "easeOutBounce",
                            "${_3}",
                            [0,18,0,0],
                            [0,18,12,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid28",
                            "clip",
                            802,
                            66,
                            "easeOutBounce",
                            "${_2}",
                            [0,28,0,0],
                            [0,28,21,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid13",
                            "clip",
                            512,
                            490,
                            "linear",
                            "${tulpina}",
                            [56,4,56,0],
                            [0,4,56,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid23",
                            "clip",
                            935,
                            67,
                            "easeOutBounce",
                            "${_42}",
                            [0,10,0,0],
                            [0,10,8,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "hohoho": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '219px', '56px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'HO-HO-HO',
                            stroke: [0, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)'],
                            c: [
                            {
                                type: 'text',
                                align: 'center',
                                text: 'HO',
                                userClass: 'edity',
                                overflow: 'hidden',
                                textStyle: ['0.6px', '', '56px', ''],
                                font: ['Roboto', [62, 'px'], 'rgba(255,255,255,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                rect: ['0px', '0px', '100%', '56px', 'auto', 'auto'],
                                id: 'HO'
                            },
                            {
                                type: 'text',
                                align: 'center',
                                text: 'HO-',
                                userClass: 'edity',
                                overflow: 'hidden',
                                textStyle: ['0.6px', '', '56px', ''],
                                font: ['Roboto', [62, 'px'], 'rgba(255,255,255,1)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                rect: ['0px', '56px', '100%', '56px', 'auto', 'auto'],
                                id: 'HOO'
                            },
                            {
                                type: 'text',
                                align: 'center',
                                text: 'HO-HO',
                                userClass: 'edity',
                                overflow: 'hidden',
                                textStyle: ['0.6px', '', '56px', ''],
                                font: ['Roboto', [62, 'px'], 'rgba(255,255,255,0.00)', '900', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                rect: ['0px', '0px', '100%', '56px', 'auto', 'auto'],
                                id: 'HO-HO'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '219px', '56px']
                        }
                    }
                },
                timeline: {
                    duration: 1066.6666666667,
                    autoPlay: true,
                    data: [
                        [
                            "eid205",
                            "top",
                            0,
                            0,
                            "easeOutBounce",
                            "${HO-HO}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid203",
                            "top",
                            800,
                            0,
                            "easeOutBounce",
                            "${HO-HO}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid204",
                            "top",
                            1067,
                            0,
                            "easeOutBounce",
                            "${HO-HO}",
                            '0px',
                            '56px'
                        ],
                        [
                            "eid199",
                            "top",
                            266,
                            0,
                            "easeOutBounce",
                            "${HO}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid200",
                            "top",
                            533,
                            0,
                            "easeOutBounce",
                            "${HO}",
                            '0px',
                            '56px'
                        ],
                        [
                            "eid201",
                            "top",
                            533,
                            0,
                            "easeOutBounce",
                            "${HOO}",
                            '56px',
                            '56px'
                        ],
                        [
                            "eid202",
                            "top",
                            800,
                            0,
                            "easeOutBounce",
                            "${HOO}",
                            '56px',
                            '56px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tabel-new_edgeActions.js");
})("tabel");
