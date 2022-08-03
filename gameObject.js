AFRAME.registerComponent("boxes", {
  schema: {
    height: { type: "number", default: 3 },
    width: { type: "number", default: 3 },
    depth: { type: "number", default: 3 },
  },
  init: function () {
    px = [22.86, -17.35, -12.81, 0.44, -30.18,
      -25.89, 15.61, 29.68, 11.95, -15.40,
      -14.09, 34.76, 2.29, 21.77, 1.57,
      34.72, 12.04, -10.90, 6.48, 15.66];

    pz = [54.56, -4.71, 14.91, 56.74, 41.13,
      50.76, 57.84, 7.02, -5.24, -26.82,
      27.59, -35.78, 34.52, 31.32, -9.22,
      26.72, 48.90, 27.24, 9.94, 54.29 ];
  
    for (var i = 0; i < 20; i++) {

      var box = document.createElement("a-entity");
      box.setAttribute("id", "box" + i); 

      //posX = Math.random()*100 -50;
      posX = px[i];
      posY = 2;
      //posZ =Math.random()*100 -50;
      posZ = pz[i]

      position = {x: posX, y: posY, z: posZ};
      box.setAttribute("position", position);

      box.setAttribute("geometry", {
          primitive: "box",
          height: 10,
          width: Math.random()*10 +1,
          depth: 0.1,
      });

      box.setAttribute("material", {
          src: "./baseBox.png",
          repeat: "1 1 1",
      });

     box.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }


    px = [54.56, -4.71, 14.91, 56.74, 41.13,
      50.76, 57.84, 7.02, -5.24, -26.82,
      27.59, -35.78, 34.52, 31.32, -9.22,
      26.72, 48.90, 27.24, 9.94, 54.29 ];

      pz = [22.86, -17.35, -12.81, 0.44, -30.18,
        -25.89, 15.61, 29.68, 11.95, -15.40,
        -14.09, 34.76, 2.29, 21.77, 1.57,
        34.72, 12.04, -10.90, 6.48, 15.66];
  
    for (var i = 0; i < 20; i++) {

      var box = document.createElement("a-entity");
      box.setAttribute("id", "box" + i); 

      //posX = Math.random()*100 -50;
      posX = px[i];
      posY = 2;
      //posZ =Math.random()*100 -50;
      posZ = pz[i]

      position = {x: posX, y: posY, z: posZ};
      box.setAttribute("position", position);

      box.setAttribute("geometry", {
          primitive: "box",
          height: 10,
          width: 0.1,
          depth: Math.random()*10 +1
      });

      box.setAttribute("material", {
          src: "./baseBox.png",
          repeat: "1 1 1",
      });

     box.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(box);
    }
  },
});