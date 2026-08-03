"use strict";
/**
 * Utility Type
 * Partial - 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 변환
 * Required - 특정 객체 타입의 모든 프로퍼티를 필수(선택적이지 않은) 프로퍼티로 변환
 * Readonly - 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 변환
 */
// Partial 타입을 통해 타입 변수 T로 전달한 객체 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 변환함.
const draft = {
    title: "제목은 나중에 짓자...",
    content: "초안...",
};
const withThumbnailPost = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
};
const withThumbnailPost2 = {
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    // thumbnailURL: "https://...",
};
const Post = {
    title: "보호된 게시글입니다.",
    tags: [],
    content: "",
};
Post.content = '해킹당함';
const readonlyPost = {
    title: "보호된 게시글입니다.",
    tags: [],
    content: "",
};
// readonlyPost.content = '해킹당함'; // ❌ Cannot assign to 'content' because it is a read-only property.ts(2540)
