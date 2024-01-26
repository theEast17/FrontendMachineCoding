const fileExplorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public Nested",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.js",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "style.css",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "index.js",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "style1.css",
          isFolder: false,
          items: [],
        },
        {
          id: "9",
          name: "style2.css2",
          isFolder: false,
          items: [],
        },
        {
          id: "10",
          name: "style3.css",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: [],
    },
  ],
};
export default fileExplorer;



