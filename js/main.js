// main.js 
const cards = [
    {
      title: "Image 1",
      img: "assets/gallery-pictures/webp/untitled-1.webp",
      alt: "Picture1",
      description: "Pink clouds reflection experiment"
    },
    {
      title: "Image 2",
      img: "assets/gallery-pictures/webp/untitled-3.webp",
      alt: "Picture2",
      description: "fun fact: 3 different cloud photos were merged here"
    },
    {
      title: "Image 3",
      img: "assets/gallery-pictures/webp/untitled-4.webp",
      alt: "Picture3",
      description: "more reflection fun"
    },
    {
      title: "Image 4",
      img: "assets/gallery-pictures/webp/untitled-5.webp",
      alt: "Picture4",
      description: "An older piece, less saturated"
    },
    {
      title: "Image 5",
      img: "assets/gallery-pictures/webp/untitled-6.webp",
      alt: "Picture5",
      description: "this one was fun but I don't how the birds came out"
    },
    {
      title: "Image 6",
      img: "assets/gallery-pictures/webp/untitled-8.webp",
      alt: "Picture6",
      description: "something simpler"
    },
    {
      title: "Image 7",
      img: "assets/gallery-pictures/webp/untitled-9.webp",
      alt: "Picture7",
      description: "more reflections!"
    },
    {
      title: "Image 8",
      img: "assets/gallery-pictures/webp/untitled-10.webp",
      alt: "Picture8",
      description: "another old piece. The blue lights were made with photoshop splatter brushes"
    },
    {
      title: "Image 9",
      img: "assets/gallery-pictures/webp/untitled-11.webp",
      alt: "Picture9",
      description: "I honestly don't really like this one"
    }
  ];
  
  localStorage.setItem('artCards', JSON.stringify(cards)); 