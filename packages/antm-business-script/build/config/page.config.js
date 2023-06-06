export default {
    pages: [
        {
            title: "首页",
            link: "pages/index/index",
            isComponent: false,
        },
        {
            title: "标签组",
            link: "pages/tag-list/index",
            componentName: "TagList",
            md: "tag-list/README.md",
            isComponent: true,
        },
        {
            title: "首页骨架屏",
            link: "pages/home-skeleton/index",
            componentName: "HomeSkeleton",
            md: "home-skeleton/README.md",
            isComponent: true,
        }
    ],
    siteBasePath: ["/components"]
};
