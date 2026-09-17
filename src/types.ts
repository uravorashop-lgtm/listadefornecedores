export interface ProductExample {
  id: string;
  title: string;
  price: string;
  badge: string;
  imageId: string;
  aspectRatio?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  highlight: string;
  previewText: string;
  imageId: string;
  tag?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ValueItem {
  id: string;
  icon: string;
  title: string;
  originalPrice: string;
}

export interface ImageSlotData {
  id: string;
  label: string;
  url: string;
  defaultDescription: string;
}
