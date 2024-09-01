// document.addEventListener("DOMContentLoaded", () => {
//   const images = [];
//   const totalFrames = 360; // Adjust to the number of images you have
//   const sequence = document.getElementById("sequence");

//   // Preload images
//   for (let i = 0; i < totalFrames; i++) {
//     const img = new Image();
//     img.src = `assets/02/02_${String(i).padStart(4, '0')}.png`;
//     images.push(img);
//   }

//   gsap.registerPlugin(ScrollTrigger);

//   const obj = { frame: totalFrames - 1 };

//   function updateImage() {
//     const imgIndex = Math.max(0, Math.floor(obj.frame));
//     sequence.src = images[imgIndex].src;
//   }

//   gsap.to(obj, {
//     frame: 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".image-sequence-container",
//       start: "top top",
//       end: "+=20%", 
//       scrub: true,
//       pin: true,
//       onUpdate: updateImage
//     }
//   });
// });


// style-2
document.addEventListener("DOMContentLoaded", () => {
  const images = [];
  const totalFrames = 244; // Total number of images (268 - 25 + 1)
  const sequence = document.getElementById("sequence");

  // Preload images
  for (let i = 25; i <= 268; i++) {
    const img = new Image();
    img.src = `assets/secuencia/DESPIECE_${String(i).padStart(5, '0')}.png`;
    images.push(img);
  }

  gsap.registerPlugin(ScrollTrigger);

  const frameData = { frame: totalFrames - 1 };

  function updateImage() {
    const imgIndex = Math.max(0, Math.floor(frameData.frame));
    sequence.src = images[imgIndex].src;
  }

  gsap.to(frameData, {
    frame: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".image-sequence-container",
      start: "top top",
      end: "+=20%",
      scrub: true,
      pin: true,
      onUpdate: updateImage
    }
  });
});


// style-2
  
// document.addEventListener("DOMContentLoaded", () => {
//     const images = [];
//     const totalFrames = 481; // Adjust to the number of images you have
//     const sequence = document.getElementById("sequence2");
  
//     // Preload images
//     for (let i = 0; i < totalFrames; i++) {
//       const img = new Image();
//       img.src = `assets/secuencia/BAMBO_FLEX${String(i).padStart(3, '0')}.jpg`;
//       images.push(img);
//     }
  
//     gsap.registerPlugin(ScrollTrigger);
  
//     const obj = { frame: totalFrames - 1 };
  
//     function updateImage() {
//       const imgIndex = Math.max(0, Math.floor(obj.frame));
//       sequence.src = images[imgIndex].src;
//     }
  
//     gsap.to(obj, {
//       frame: 0,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".image-sequence-container2",
//         start: "top top",
//         end: "+=20%", 
//         scrub: true,
//         pin: true,
//         onUpdate: updateImage
//       }
//     });
//   });
  