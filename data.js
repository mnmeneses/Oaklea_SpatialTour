var APP_DATA = {
  "scenes": [
    {
      "id": "0-front_far",
      "name": "Front_Far",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.06724017376977542,
        "pitch": -0.03163752013394472,
        "fov": 0.7666538701157023
      },
      "linkHotspots": [
        {
          "yaw": 0.13119914044953163,
          "pitch": 0.13960785217835436,
          "rotation": 0,
          "target": "1-front_near"
        },
        {
          "yaw": 0.4841322708810001,
          "pitch": -0.0819443877630146,
          "rotation": 0,
          "target": "10-aerial-view-01"
        },
        {
          "yaw": -0.5264301077064193,
          "pitch": -0.08418311762894604,
          "rotation": 0,
          "target": "11-aerial-view-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front_near",
      "name": "Front_Near",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05235970133926671,
        "pitch": -0.014618142736319228,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": 1.520680254370034,
          "pitch": 0.081147796791603,
          "rotation": 4.71238898038469,
          "target": "2-front_right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-front_right",
      "name": "Front_Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11743026587239491,
        "pitch": 0.04332711181222493,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -0.8849316049027909,
          "pitch": 0.19974321635023884,
          "rotation": 1.5707963267948966,
          "target": "1-front_near"
        },
        {
          "yaw": 0.9964868736942414,
          "pitch": 0.0738526334382783,
          "rotation": 4.71238898038469,
          "target": "3-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-right",
      "name": "Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4413606714058833,
          "pitch": 0.01280328523506391,
          "rotation": 1.5707963267948966,
          "target": "2-front_right"
        },
        {
          "yaw": 1.396067269777813,
          "pitch": 0.059251351782950934,
          "rotation": 4.71238898038469,
          "target": "4-back_right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-back_right",
      "name": "Back_Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.016317186009775497,
        "pitch": 0.02990593312723533,
        "fov": 1.3324008903085869
      },
      "linkHotspots": [
        {
          "yaw": 1.058055874954464,
          "pitch": 0.058991578643730946,
          "rotation": 4.71238898038469,
          "target": "5-back"
        },
        {
          "yaw": -0.9253842466124063,
          "pitch": 0.02974548505319774,
          "rotation": 1.5707963267948966,
          "target": "3-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-back",
      "name": "Back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.03141592653589953,
        "pitch": -0.09833857812894209,
        "fov": 1.3483902604801417
      },
      "linkHotspots": [
        {
          "yaw": -1.5995266158500563,
          "pitch": 0.04917108541864934,
          "rotation": 1.5707963267948966,
          "target": "4-back_right"
        },
        {
          "yaw": 1.5842215687885357,
          "pitch": 0.03717837747394981,
          "rotation": 4.71238898038469,
          "target": "6-back_left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-back_left",
      "name": "Back_Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04051990009971718,
        "pitch": 0.019318896823243392,
        "fov": 1.3262292529403708
      },
      "linkHotspots": [
        {
          "yaw": -1.1399901052357126,
          "pitch": 0.09434649809435136,
          "rotation": 1.5707963267948966,
          "target": "5-back"
        },
        {
          "yaw": 1.4048710573295633,
          "pitch": 0.04488109830554876,
          "rotation": 4.71238898038469,
          "target": "7-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-left",
      "name": "Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.04710279784486282,
        "pitch": -0.007776268897289995,
        "fov": 1.3105861594796901
      },
      "linkHotspots": [
        {
          "yaw": -1.3046102120694467,
          "pitch": 0.08290894554374795,
          "rotation": 1.5707963267948966,
          "target": "6-back_left"
        },
        {
          "yaw": 1.4097521093565923,
          "pitch": 0.07601468148850721,
          "rotation": 4.71238898038469,
          "target": "8-front_left-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-front_left-01",
      "name": "Front_Left 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.299304367603174,
          "pitch": 0.06708171338379465,
          "rotation": 7.853981633974483,
          "target": "7-left"
        },
        {
          "yaw": 1.4205986442161382,
          "pitch": 0.08998002789329718,
          "rotation": 4.71238898038469,
          "target": "9-front_left-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-front_left-02",
      "name": "Front_Left 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6766764727997625,
          "pitch": 0.06529737893838572,
          "rotation": 1.5707963267948966,
          "target": "8-front_left-01"
        },
        {
          "yaw": 1.4459801327215374,
          "pitch": 0.12018954486450717,
          "rotation": 4.71238898038469,
          "target": "0-front_far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-aerial-view-01",
      "name": "Aerial View 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11640441067360108,
        "pitch": 1.0573517421731182,
        "fov": 0.7117559781506009
      },
      "linkHotspots": [
        {
          "yaw": -1.063339324064497,
          "pitch": 1.0958930037742487,
          "rotation": 1.5707963267948966,
          "target": "0-front_far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-aerial-view-02",
      "name": "Aerial View 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.07053034355955745,
        "pitch": 1.1910407439448676,
        "fov": 0.7541639158381953
      },
      "linkHotspots": [
        {
          "yaw": 1.2816865511425064,
          "pitch": 1.074773322916199,
          "rotation": 5.497787143782138,
          "target": "0-front_far"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Oaklea",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
