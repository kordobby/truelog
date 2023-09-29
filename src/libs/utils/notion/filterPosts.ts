import { TPosts, TPostStatus, TPostType } from "@/src/types"

type Options = {
  acceptStatus?: TPostStatus[]
  acceptType?: TPostType[]
}
//
const initialOption: Options = {
  acceptStatus: ["Public"],
  acceptType: ["Post"],
}
const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export function filterPosts(posts: TPosts, options: Options = initialOption) {
  const { acceptStatus = ["Public"], acceptType = ["Post"] } = options
  //d
  const filteredPosts = posts
    .filter((post) => {
      const postDate = new Date(post?.date?.start_date || post.createdTime)
      if (!post.title || !post.slug || postDate > tomorrow) return false
      return true
    })
    .filter((post) => {
      const postStatus = post?.status?.[0]
      return acceptStatus.includes(postStatus)
    })
    .filter((post) => {
      const postType = post.type[0]
      return acceptType.includes(postType)
    })
  return filteredPosts
}

// 회고록
// day28
// day29
// day 32
// day 35
// day 36
// day 40
// css-in-css
// react life cycle -title
// diary - fix image
// monthly - august
// debuggin
// 불변성 - 숮정
// immer - public
// hardware
// 동시성 병렬성
// 9월
