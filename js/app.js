import { cho_arr, thucan_arr, phukien_arr, news_arr } from './data.js';
const hien1Cho = (cho) => {
    return `<div>
        <img src="${cho.hinh}" alt="${cho.ten}">
        <h4>${cho.ten}</h4>
        <p>Giá: ${cho.gia}</p>
    </div>`;
};
const hien1ThucAn = (thucan) => {
    return `<div>
        <img src="${thucan.hinh}" alt="${thucan.ten}">
        <h4>${thucan.ten}</h4>
        <p>Giá: ${thucan.gia}</p>
    </div>`;
};
const hien1PhuKien = (phukien) => {
    return `<div>
        <img src="${phukien.hinh}" alt="${phukien.ten}">
        <h4>${phukien.ten}</h4>
        <p>Giá: ${phukien.gia}</p>
    </div>`;
};
const hien1News = (news) => {
    return `<div>
        <h4>${news.title}</h4>
        <p>${news.content}</p>
    </div>`;
};
export const showListCho = () => {
    const html_arr = cho_arr.map(hien1Cho);
    return html_arr.join("");
};
export const showListThucAn = () => {
    const html_arr = thucan_arr.map(hien1ThucAn);
    return html_arr.join("");
};
export const showListPhuKien = () => {
    const html_arr = phukien_arr.map(hien1PhuKien);
    return html_arr.join("");
};
export const showNews = () => {
    const html_arr = news_arr.map(hien1News);
    return html_arr.join("");
};
