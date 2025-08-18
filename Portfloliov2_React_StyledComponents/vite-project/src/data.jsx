const data = {
  home: {
    header: {
      title: "ABOUT ME",
      description: (
        <p>
          Hi there! <strong>I’m Nguyen Anh Trung</strong>, a 26-year-old
          code-wrangler currently studying programming at Vuoksi.
          <br />
          <br />
          Before diving into the world of loops and bugs, I spent 5 years
          wrestling with the wild beast known as eCommerce — and somehow
          survived. <br />
          <br />I love travel, because sometimes my code needs a break… and so
          do I. If life were a program, I’d say I’m still in the beta version,
          but with plenty of exciting updates coming soon!
        </p>
      ),
      icon: {
        programming: {
          src: "/images/programing.png",
          alt: "Programming",
        },
        ecommerce: {
          src: "/images/ecommerce.png",
          alt: "Ecommerce",
        },
        travel: {
          src: "/images/travel.png",
          alt: "Travel",
        },
      },
    },
    skills: {
      heading: "My Skills",
      skillImage: {
        html: {
          src: "/images/html.png",
          description: "Html",
        },
        css: {
          src: "/images/css.png",
          description: "Css",
        },
        js: {
          src: "/images/js.png",
          description: "JavaScripts",
        },
        react: {
          src: "/images/react.png",
          description: "React",
        },
        ecommerce: {
          src: "/images/ecommerceS.png",
          description: "eCommerce",
        },
      },
    },
    works: {
      headeing: "My Work",
      image: {
        src: "/images/work.png",
      },
      description: (
        <div>
          <strong>
            <p class="oma">
              I’m also the founder of OmaCustom.fi, a brand I started back in
              2024.
            </p>
          </strong>
          <p>
            At OmaCustom.fi, I create personalized products that turn everyday
            items into something
            <i>
              unique, fun, and totally <strong>“you”</strong>
            </i>
            .
          </p>
          <p>
            I built this brand from scratch because I wanted to combine my love
            for creativity, tech, and helping people express themselves. Every
            product has a little bit of me in it — from the idea to the final
            design.
          </p>
          <p>
            When I’m not coding or shipping custom goodies, I love traveling and
            finding inspiration for the next quirky product idea.
          </p>
        </div>
      ),
    },
    hobbies: {
      heading: "HOBBIES",
      section: ["Movie", "Pet", "Travel"],
      images: ["/images/movie.png", "/images/pet.png", "/images/travel2.png"],
      description: {
        title: [
          "Movies are for reflection and appreciation",
          "Pets always make me feel happier and lighter.",
          "Traveling is always a wonderful time to explore the world and enjoy memorable moments.",
        ],
        detail: [
          "I enjoy films that are deep and meaningful, the kind that linger in your mind long after you’ve left the theater, not just ones that serve as momentary entertainment. These stories are often quiet, never trying to force emotions, but gently guiding the audience through layers of meaning and subtle details. When the credits roll, something still stays with you.",
          "Pets are always loyal, trustworthy companions who bring simple joys and unconditional love, making everyday life warmer. Caring for a pet is not just about looking after an animal—it teaches patience, love, and appreciation for the small but meaningful moments.",
          "What makes each trip truly special is going with family and friends – laughing together, experiencing new things, and creating unforgettable memories. Every destination brings a fresh feeling, but the real joy comes from sharing moments and connecting with the people you love.",
        ],
      },
    },
  },
};

export default data;
