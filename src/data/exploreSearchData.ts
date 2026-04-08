import { StayItem } from "../types/stay";

export const searchFilterChips = ["Giá", "Loại hình", "Đánh giá"];
export const exploreFilterChips = ["Khách sạn", "Homestay", "Resort"];

export const searchStayItems: StayItem[] = [
  {
    id: "sala-danang-beach",
    name: "Sala Danang Beach Hotel",
    type: "HOTEL",
    location: "Cách biển Mỹ Khê 200m",
    price: "2.450.000đ",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    rating: "4.6 (3.6k)",
    tags: ["ĐỀ XUẤT HÀNG ĐẦU"],
    highlights: ["Phù hợp gia đình, gần biển, hồ bơi vô cực"],
  },
  {
    id: "muong-thanh-luxury",
    name: "Mường Thanh Luxury",
    type: "HOTEL",
    location: "Cách biển Mỹ Khê 50m",
    price: "1.850.000đ",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    rating: "4.5 (2.8k)",
    tags: ["Không gian rộng rãi, buffet đa dạng"],
    highlights: ["Cách cầu Rồng 3km", "Gần khu ăn uống đêm"],
  },
  {
    id: "ocean-suites",
    name: "The Ocean Suites",
    type: "APARTMENT",
    location: "Cách biển Mỹ Khê 400m",
    price: "3.100.000đ",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9 (1.2k)",
    tags: ["Cao cấp riêng tư"],
    highlights: ["Có bếp riêng, thích hợp nhóm bạn hoặc bé"],
  },
];

export const exploreStayItems: StayItem[] = [
  {
    id: "sala-explore",
    name: "Sala Danang Beach Hotel",
    type: "HOTEL",
    location: "Sơn Trà, Đà Nẵng",
    price: "1.850.000đ",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9 (1.2k)",
    tags: ["Phù hợp gia đình, rất gần biển Mỹ Khê và có buffet sáng tuyệt vời."],
    highlights: ["2 phút đến Biển Mỹ Khê", "5 phút đến Cầu Rồng"],
  },
  {
    id: "intercontinental-explore",
    name: "InterContinental Sun Peninsula",
    type: "RESORT",
    location: "Bán đảo Sơn Trà, Đà Nẵng",
    price: "12.500.000đ",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1200&q=80",
    rating: "4.9 (895)",
    tags: ["Yên tĩnh, phù hợp nghỉ dưỡng biệt lập với kiến trúc Bill Bensley đẳng cấp."],
    highlights: ["25 phút đến trung tâm", "35 phút đến sân bay"],
  },
  {
    id: "monarque-explore",
    name: "Monarque Hotel",
    type: "HOTEL",
    location: "An Thượng, Đà Nẵng",
    price: "1.200.000đ",
    image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&w=1200&q=80",
    rating: "4.7 (920)",
    tags: ["Gần các quán ăn ngon tại An Thượng. Trà chiều miễn phí rất đặc sắc."],
    highlights: ["1 phút đi biển Phạm Văn", "10 phút đến sân bay"],
  },
];
