"use strict";
exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 7226:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* reexport safe */ _notion_client__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   J: () => (/* reexport safe */ _notion_client__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3580);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_notion_client__WEBPACK_IMPORTED_MODULE_0__]);
_notion_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ getPosts)
/* harmony export */ });
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3964);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8751);
/* harmony import */ var src_libs_utils_notion_getAllPageIds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9091);
/* harmony import */ var src_libs_utils_notion_getPageProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5172);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_client__WEBPACK_IMPORTED_MODULE_1__, notion_utils__WEBPACK_IMPORTED_MODULE_2__, src_libs_utils_notion_getAllPageIds__WEBPACK_IMPORTED_MODULE_3__, src_libs_utils_notion_getPageProperties__WEBPACK_IMPORTED_MODULE_4__]);
([notion_client__WEBPACK_IMPORTED_MODULE_1__, notion_utils__WEBPACK_IMPORTED_MODULE_2__, src_libs_utils_notion_getAllPageIds__WEBPACK_IMPORTED_MODULE_3__, src_libs_utils_notion_getPageProperties__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */ // TODO: react query를 사용해서 처음 불러온 뒤로는 해당데이터만 사용하도록 수정
const getPosts = async ()=>{
    let id = site_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.notionConfig.pageId;
    const api = new notion_client__WEBPACK_IMPORTED_MODULE_1__.NotionAPI();
    const response = await api.getPage(id);
    id = (0,notion_utils__WEBPACK_IMPORTED_MODULE_2__.idToUuid)(id);
    const collection = Object.values(response.collection)[0]?.value;
    const block = response.block;
    const schema = collection?.schema;
    const rawMetadata = block[id].value;
    // Check Type
    if (rawMetadata?.type !== "collection_view_page" && rawMetadata?.type !== "collection_view") {
        return [];
    } else {
        // Construct Data
        const pageIds = (0,src_libs_utils_notion_getAllPageIds__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(response);
        const data = [];
        for(let i = 0; i < pageIds.length; i++){
            const id = pageIds[i];
            const properties = await (0,src_libs_utils_notion_getPageProperties__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(id, block, schema) || null;
            // Add fullwidth, createdtime to properties
            properties.createdTime = new Date(block[id].value?.created_time).toString();
            properties.fullWidth = (block[id].value?.format)?.page_full_width ?? false;
            data.push(properties);
        }
        // Sort by date
        data.sort((a, b)=>{
            const dateA = new Date(a?.date?.start_date || a.createdTime);
            const dateB = new Date(b?.date?.start_date || b.createdTime);
            return dateB - dateA;
        });
        const posts = data;
        return posts;
    }
}; // fix

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8634:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ getRecordMap)
/* harmony export */ });
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_client__WEBPACK_IMPORTED_MODULE_0__]);
notion_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getRecordMap = async (pageId)=>{
    const api = new notion_client__WEBPACK_IMPORTED_MODULE_0__.NotionAPI();
    const recordMap = await api.getPage(pageId);
    return recordMap;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* reexport safe */ _getRecordMap__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   J: () => (/* reexport safe */ _getPosts__WEBPACK_IMPORTED_MODULE_1__.J)
/* harmony export */ });
/* harmony import */ var _getRecordMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8634);
/* harmony import */ var _getPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4029);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getRecordMap__WEBPACK_IMPORTED_MODULE_0__, _getPosts__WEBPACK_IMPORTED_MODULE_1__]);
([_getRecordMap__WEBPACK_IMPORTED_MODULE_0__, _getPosts__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ COLOR_SET)
/* harmony export */ });
const COLOR_SET = {
    0: "rgb(186 230 253)",
    1: "rgb(254 205 211)",
    2: "rgb(245 208 254)",
    3: "rgb(221 214 254)",
    4: "rgb(191 219 254)",
    5: "rgb(204 251 241)",
    6: "rgb(187 247 208)",
    7: "rgb(254 249 195)",
    8: "rgb(186 230 253)",
    9: "rgb(254 202 202)",
    A: "rgb(231 229 228)",
    B: "rgb(226 232 240)",
    C: "rgb(252 231 243)",
    D: "rgb(233 213 255)",
    E: "rgb(199 210 254)",
    F: "rgb(209 250 229)"
};


/***/ }),

/***/ 5511:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export getColorClassByName */
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8229);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4115);
/* harmony import */ var src_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4258);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_4__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const getColorClassByName = (name)=>{
    try {
        let sum = 0;
        name.split("").forEach((alphabet)=>sum = sum + alphabet.charCodeAt(0));
        const colorKey = sum.toString(16)?.[sum.toString(16).length - 1].toUpperCase();
        return _constants__WEBPACK_IMPORTED_MODULE_3__/* .COLOR_SET */ .p[colorKey];
    } catch  {
        return _constants__WEBPACK_IMPORTED_MODULE_3__/* .COLOR_SET */ .p[0];
    }
};
const Category = ({ readOnly = false, children })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const handleClick = (value)=>{
        if (readOnly) return;
        router.push(`/?category=${value}`);
    };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        onClick: ()=>handleClick(children),
        css: {
            backgroundColor: getColorClassByName(children),
            cursor: readOnly ? "default" : "pointer"
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);
const StyledWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_4__["default"].div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 9999px;
  width: fit-content;
  font-size: 0.875rem;
  line-height: 1.25rem;
  opacity: 0.9;
  color: ${src_styles__WEBPACK_IMPORTED_MODULE_5__/* .colors */ .O9.dark.gray1};
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7101);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4115);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__]);
([_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__, _emotion_styled__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Tag = ({ children })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleClick = (value)=>{
        router.push(`/?tag=${value}`);
    };
    return /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledWrapper, {
        onClick: ()=>handleClick(children),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tag);
const StyledWrapper = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 50px;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 400;
  color: ${({ theme })=>theme.colors.gray10};
  background-color: ${({ theme })=>theme.colors.gray5};
  cursor: pointer;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ formatDate)
/* harmony export */ });
function formatDate(date, local) {
    const d = new Date(date);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    };
    const res = d.toLocaleDateString(local, options);
    return res;
}


/***/ }),

/***/ 9637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ customMapImageUrl)
/* harmony export */ });
const customMapImageUrl = (url, block)=>{
    if (!url) {
        throw new Error("URL can't be empty");
    }
    if (url.startsWith("data:")) {
        return url;
    }
    // more recent versions of notion don't proxy unsplash images
    if (url.startsWith("https://images.unsplash.com")) {
        return url;
    }
    try {
        const u = new URL(url);
        if (u.pathname.startsWith("/secure.notion-static.com") && u.hostname.endsWith(".amazonaws.com")) {
            if (u.searchParams.has("X-Amz-Credential") && u.searchParams.has("X-Amz-Signature") && u.searchParams.has("X-Amz-Algorithm")) {
                // if the URL is already signed, then use it as-is
                url = u.origin + u.pathname;
            }
        }
    } catch  {
    // ignore invalid urls
    }
    if (url.startsWith("/images")) {
        url = `https://www.notion.so${url}`;
    }
    url = `https://www.notion.so${url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`}`;
    const notionImageUrlV2 = new URL(url);
    let table = block.parent_table === "space" ? "block" : block.parent_table;
    if (table === "collection" || table === "team") {
        table = "block";
    }
    notionImageUrlV2.searchParams.set("table", table);
    notionImageUrlV2.searchParams.set("id", block.id);
    notionImageUrlV2.searchParams.set("cache", "v2");
    url = notionImageUrlV2.toString();
    return url;
};


/***/ }),

/***/ 9091:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getAllPageIds)
/* harmony export */ });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__]);
notion_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function getAllPageIds(response, viewId) {
    const collectionQuery = response.collection_query;
    const views = Object.values(collectionQuery)[0];
    let pageIds = [];
    if (viewId) {
        const vId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.idToUuid)(viewId);
        pageIds = views[vId]?.blockIds;
    } else {
        const pageSet = new Set();
        // * type not exist
        Object.values(views).forEach((view)=>{
            view?.collection_group_results?.blockIds?.forEach((id)=>pageSet.add(id));
        });
        pageIds = [
            ...pageSet
        ];
    }
    return pageIds;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ getPageProperties)
/* harmony export */ });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8751);
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(743);
/* harmony import */ var _customMapImageUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9637);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notion_utils__WEBPACK_IMPORTED_MODULE_0__, notion_client__WEBPACK_IMPORTED_MODULE_1__]);
([notion_utils__WEBPACK_IMPORTED_MODULE_0__, notion_client__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getPageProperties(id, block, schema) {
    const api = new notion_client__WEBPACK_IMPORTED_MODULE_1__.NotionAPI();
    const rawProperties = Object.entries(block?.[id]?.value?.properties || []);
    const excludeProperties = [
        "date",
        "select",
        "multi_select",
        "person",
        "file"
    ];
    const properties = {};
    for(let i = 0; i < rawProperties.length; i++){
        const [key, val] = rawProperties[i];
        properties.id = id;
        if (schema[key]?.type && !excludeProperties.includes(schema[key].type)) {
            properties[schema[key].name] = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getTextContent)(val);
        } else {
            switch(schema[key]?.type){
                case "file":
                    {
                        try {
                            const Block = block?.[id].value;
                            const url = val[0][1][0][1];
                            const newurl = (0,_customMapImageUrl__WEBPACK_IMPORTED_MODULE_2__/* .customMapImageUrl */ .T)(url, Block);
                            properties[schema[key].name] = newurl;
                        } catch (error) {
                            properties[schema[key].name] = undefined;
                        }
                        break;
                    }
                case "date":
                    {
                        const dateProperty = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getDateValue)(val);
                        delete dateProperty.type;
                        properties[schema[key].name] = dateProperty;
                        break;
                    }
                case "select":
                    {
                        const selects = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getTextContent)(val);
                        if (selects[0]?.length) {
                            properties[schema[key].name] = selects.split(",");
                        }
                        break;
                    }
                case "multi_select":
                    {
                        const selects = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.getTextContent)(val);
                        if (selects[0]?.length) {
                            properties[schema[key].name] = selects.split(",");
                        }
                        break;
                    }
                case "person":
                    {
                        const rawUsers = val.flat();
                        const users = [];
                        for(let i = 0; i < rawUsers.length; i++){
                            if (rawUsers[i][0][1]) {
                                const userId = rawUsers[i][0];
                                const res = await api.getUsers(userId);
                                const resValue = res?.recordMapWithRoles?.notion_user?.[userId[1]]?.value;
                                const user = {
                                    id: resValue?.id,
                                    name: resValue?.name || `${resValue?.family_name}${resValue?.given_name}` || undefined,
                                    profile_photo: resValue?.profile_photo || null
                                };
                                users.push(user);
                            }
                        }
                        properties[schema[key].name] = users;
                        break;
                    }
                default:
                    break;
            }
        }
    }
    return properties;
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* reexport */ filterPosts),
  P: () => (/* reexport */ getAllSelectItemsFromPosts)
});

;// CONCATENATED MODULE: ./src/libs/utils/notion/getAllSelectItemsFromPosts.ts
function getAllSelectItemsFromPosts(key, posts) {
    const selectedPosts = posts.filter((post)=>post?.[key]);
    const items = [
        ...selectedPosts.map((p)=>p[key]).flat()
    ];
    const itemObj = {};
    items.forEach((item)=>{
        if (!item) return;
        if (item in itemObj) {
            itemObj[item]++;
        } else {
            itemObj[item] = 1;
        }
    });
    return itemObj;
}

;// CONCATENATED MODULE: ./src/libs/utils/notion/filterPosts.ts
const initialOption = {
    acceptStatus: [
        "Public"
    ],
    acceptType: [
        "Post"
    ]
};
const current = new Date();
const tomorrow = new Date(current);
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);
function filterPosts(posts, options = initialOption) {
    const { acceptStatus = [
        "Public"
    ], acceptType = [
        "Post"
    ] } = options;
    const filteredPosts = posts// filter data
    .filter((post)=>{
        const postDate = new Date(post?.date?.start_date || post.createdTime);
        if (!post.title || !post.slug || postDate > tomorrow) return false;
        return true;
    })// filter status
    .filter((post)=>{
        const postStatus = post.status[0];
        return acceptStatus.includes(postStatus);
    })// filter type
    .filter((post)=>{
        const postType = post.type[0];
        return acceptType.includes(postType);
    });
    return filteredPosts;
}

;// CONCATENATED MODULE: ./src/libs/utils/notion/index.ts




/***/ })

};
;