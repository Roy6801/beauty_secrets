const homeStyle = {
  homeContainer: {
    my: { xs: 7, sm: 7.5, lg: 8 },
    p: { xs: 0, sm: 2, md: 3, lg: 4 },
    backgroundColor: "black",
  },
  titleCard: {
    container: {
      position: "relative",
      textAlign: "center",
      color: "white",
      borderRadius: { xs: "0px", lg: "10px" },
    },
    centered: {
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    title: {
      fontSize: { lg: "72px", md: "64px", sm: "56px", xs: "48px" },
      fontFamily: "Lobster",
    },
    subTitle: {
      fontSize: { lg: "40px", md: "36px", sm: "32px", xs: "26px" },
      fontFamily: "Dancing Script",
    },
    image: {
      objectFit: "cover",
      maxHeight: { xs: 220, sm: 320, md: 480, lg: 512 },
    },
  },

  reviewPanel: {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    },
    container: {
      display: "flex",
      flexDirection: "column",
      my: 10,
    },

    title: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      p: 2,
    },
    subTitle: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#faaf00",
      m: 1,
    },
    review: {
      display: "flex",
      alignItems: "center",
      marginLeft: 20,
    },
    reviewCard: {
      card: {
        m: 2,
        py: 2,
        height: 320,
      },
    },
  },

  instaPanel: {
    container: {
      my: 10,
    },
    titleCard: {
      display: "flex",
      backgroundColor: "#f5f5f5",
      p: 2,
    },
    title: {
      mx: 2,
      fontFamily: "Lobster",
      fontSize: { lg: "28px", md: "24px", xs: "20px" },
      fontWeight: "bold",
    },
    imageList: {
      m: 2,
    },
  },
};

export default homeStyle;
