const cho_arr = [
    { id: 1, ten: "Chó Husky", gia: "10,000,000 VNĐ", hinh: "images/husky.jpg" },
    { id: 2, ten: "Chó Poodle", gia: "7,000,000 VNĐ", hinh: "images/poodle.jpg" },
    { id: 3, ten: "Chó Shiba Inu", gia: "15,000,000 VNĐ", hinh: "images/shiba.jpg" },
    { id: 4, ten: "Chó Golden Retriever", gia: "12,000,000 VNĐ", hinh: "images/golden.jpg" },
    { id: 5, ten: "Chó Corgi", gia: "20,000,000 VNĐ", hinh: "images/corgi.jpg" },
    { id: 6, ten: "Chó Samoyed", gia: "18,000,000 VNĐ", hinh: "images/samoyed.jpg" },
    { id: 7, ten: "Chó Chihuahua", gia: "6,000,000 VNĐ", hinh: "images/chihuahua.jpg" },
    { id: 8, ten: "Chó Dalmatian", gia: "11,000,000 VNĐ", hinh: "images/dalmatian.jpg" },
    { id: 9, ten: "Chó Pug", gia: "8,500,000 VNĐ", hinh: "images/pug.jpg" },
    { id: 10, ten: "Chó Boxer", gia: "9,000,000 VNĐ", hinh: "images/boxer.jpg" },
    { id: 11, ten: "Chó Doberman", gia: "13,000,000 VNĐ", hinh: "images/doberman.jpg" },
    { id: 12, ten: "Chó Great Dane", gia: "14,500,000 VNĐ", hinh: "images/greatdane.jpg" },
];
const thucan_arr = [
    { id: 1, ten: "Thức ăn cho chó Royal Canin", gia: "500,000 VNĐ", hinh: "images/royalcanin.jpg" },
    { id: 2, ten: "Thức ăn Pedigree", gia: "300,000 VNĐ", hinh: "images/pedigree.jpg" },
    { id: 3, ten: "Thức ăn cho chó SmartHeart", gia: "350,000 VNĐ", hinh: "images/smartheart.jpg" },
    { id: 4, ten: "Thức ăn cho chó Nutri Source", gia: "550,000 VNĐ", hinh: "images/nutrisource.jpg" },
    { id: 5, ten: "Thức ăn cho chó ANF", gia: "450,000 VNĐ", hinh: "images/anf.jpg" },
    { id: 6, ten: "Thức ăn cho chó Me-O", gia: "400,000 VNĐ", hinh: "images/meo.jpg" },
    { id: 7, ten: "Thức ăn cho chó Fitmin", gia: "500,000 VNĐ", hinh: "images/fitmin.jpg" },
    { id: 8, ten: "Thức ăn cho chó Ganador", gia: "320,000 VNĐ", hinh: "images/ganador.jpg" },
    { id: 9, ten: "Thức ăn cho chó Zenith", gia: "370,000 VNĐ", hinh: "images/zenith.jpg" },
    { id: 10, ten: "Thức ăn cho chó Home Dog", gia: "290,000 VNĐ", hinh: "images/homedog.jpg" },
    { id: 11, ten: "Thức ăn cho chó Alpo", gia: "400,000 VNĐ", hinh: "images/alpo.jpg" },
    { id: 12, ten: "Thức ăn cho chó Blue Buffalo", gia: "750,000 VNĐ", hinh: "images/bluebuffalo.jpg" },
    { id: 13, ten: "Thức ăn cho chó Wellness", gia: "800,000 VNĐ", hinh: "images/wellness.jpg" },
    { id: 14, ten: "Thức ăn cho chó Merrick", gia: "600,000 VNĐ", hinh: "images/merrick.jpg" },
    { id: 15, ten: "Thức ăn cho chó Taste of the Wild", gia: "700,000 VNĐ", hinh: "images/tasteofthewild.jpg" },
    { id: 16, ten: "Thức ăn cho chó Victor", gia: "650,000 VNĐ", hinh: "images/victor.jpg" },
    { id: 17, ten: "Thức ăn cho chó Eukanuba", gia: "720,000 VNĐ", hinh: "images/eukanuba.jpg" },
    { id: 18, ten: "Thức ăn cho chó Iams", gia: "500,000 VNĐ", hinh: "images/iams.jpg" },
    { id: 19, ten: "Thức ăn cho chó Nature's Logic", gia: "800,000 VNĐ", hinh: "images/natureslogic.jpg" },
    { id: 20, ten: "Thức ăn cho chó Orijen", gia: "1,200,000 VNĐ", hinh: "images/orijen.jpg" },
];
const phukien_arr = [
    { id: 1, ten: "Vòng cổ cho chó", gia: "150,000 VNĐ", hinh: "images/vongco.jpg" },
    { id: 2, ten: "Dây xích cho chó", gia: "200,000 VNĐ", hinh: "images/dayxich.jpg" },
    { id: 3, ten: "Áo khoác cho chó", gia: "300,000 VNĐ", hinh: "images/aokhoac.jpg" },
    { id: 4, ten: "Đồ chơi gặm", gia: "50,000 VNĐ", hinh: "images/dochoigam.jpg" },
    { id: 5, ten: "Giường ngủ cho chó", gia: "500,000 VNĐ", hinh: "images/giuongchocho.jpg" },
    { id: 6, ten: "Bát ăn đôi", gia: "100,000 VNĐ", hinh: "images/batan.jpg" },
    { id: 7, ten: "Bàn chải lông", gia: "70,000 VNĐ", hinh: "images/banchaillong.jpg" },
    { id: 8, ten: "Túi xách cho chó", gia: "400,000 VNĐ", hinh: "images/tuixach.jpg" },
    { id: 9, ten: "Khăn lau mặt", gia: "20,000 VNĐ", hinh: "images/khanlaumat.jpg" },
    { id: 10, ten: "Bình nước di động", gia: "150,000 VNĐ", hinh: "images/binhnuoc.jpg" },
    { id: 11, ten: "Móng vuốt giả", gia: "30,000 VNĐ", hinh: "images/mongvuot.jpg" },
    { id: 12, ten: "Lều cho chó", gia: "700,000 VNĐ", hinh: "images/leuchocho.jpg" },
    { id: 13, ten: "Tấm thảm làm mát", gia: "250,000 VNĐ", hinh: "images/thamlamat.jpg" },
    { id: 14, ten: "Đèn cổ cho chó", gia: "100,000 VNĐ", hinh: "images/dencol.jpg" },
    { id: 15, ten: "Máy lọc nước", gia: "600,000 VNĐ", hinh: "images/maylocnuoc.jpg" },
    { id: 16, ten: "Đĩa bay cho chó", gia: "50,000 VNĐ", hinh: "images/diabay.jpg" },
    { id: 17, ten: "Kính mát cho chó", gia: "120,000 VNĐ", hinh: "images/kinhmat.jpg" },
    { id: 18, ten: "Áo phao cho chó", gia: "350,000 VNĐ", hinh: "images/aophao.jpg" },
    { id: 19, ten: "Balo cho chó", gia: "450,000 VNĐ", hinh: "images/balo.jpg" },
    { id: 20, ten: "Đèn đeo cổ", gia: "90,000 VNĐ", hinh: "images/dendeocol.jpg" }
];
const news_arr = [
    { id: 1, title: "Chăm sóc chó mùa đông", content: " Sử dụng áo khoác: Đối với những giống chó có bộ lông mỏng hoặc không chịu lạnh tốt, hãy mặc áo khoác cho chúng khi ra ngoài." },
    { id: 2, title: "Lợi ích của việc huấn luyện chó", content: "Huấn luyện chó giúp tăng cường mối quan hệ giữa chủ và thú cưng, cải thiện hành vi, và đảm bảo an toàn cho cả hai." },
    { id: 3, title: "Chế độ dinh dưỡng cho chó", content: "Chế độ dinh dưỡng hợp lý đóng vai trò quan trọng trong việc duy trì sức khỏe và sự phát triển của chó. Dưới đây là những điểm chính cần lưu ý để đảm bảo chó của bạn nhận được dinh dưỡng đầy đủ và cân đối." },
    { id: 4, title: "Cách tắm cho chó đúng cách", content: "Tắm cho chó không chỉ giúp chúng sạch sẽ mà còn góp phần duy trì sức khỏe và vệ sinh cho thú cưng. Dưới đây là hướng dẫn chi tiết về cách tắm cho chó một cách đúng cách và an toàn." },
    { id: 5, title: "Phòng ngừa bệnh cho chó", content: "Việc phòng ngừa bệnh cho chó là rất quan trọng để đảm bảo sức khỏe và chất lượng cuộc sống của chúng. Dưới đây là một số biện pháp hiệu quả để bảo vệ thú cưng khỏi các bệnh tật" },
];
export { cho_arr, thucan_arr, phukien_arr, news_arr };
