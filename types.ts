import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}