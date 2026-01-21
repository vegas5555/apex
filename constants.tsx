import React from 'react';
import { ServiceItem, Testimonial, Project } from './types';

// Icons as SVG components
export const Icons = {
  Oven: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Ventilation: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Floor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Plumbing: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Chat: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ovens',
    title: 'Installation Fours & Cuisson',
    description: 'Expertise multi-marques pour fours à sole, rotatifs et ventilés. Raccordements gaz, électriques et mises en service conformes.',
    icon: <Icons.Oven />,
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Dépannage',
    description: 'Contrats d\'entretien préventif et dépannage urgent 7j/7 pour minimiser vos arrêts de production.',
    icon: <Icons.Plumbing />, // Using gear icon representing maintenance
  },
  {
    id: 'froid',
    title: 'Froid & Fermentation',
    description: 'Installation de chambres de pousse, surgélateurs et tours réfrigérés. Maîtrise de la chaîne du froid.',
    icon: <Icons.Ventilation />, // Using snowflake/wind style icon
  },
  {
    id: 'agencement',
    title: 'Agencement Laboratoire',
    description: 'Conception ergonomique de vos fournils et cuisines. Revêtements de sol hygiéniques et normes sanitaires.',
    icon: <Icons.Floor />,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Jean-Pierre Dubois',
    role: 'Maître Boulanger',
    company: 'Maison Dubois',
    quote: 'Une équipe réactive qui comprend nos contraintes horaires. L\'installation de mon nouveau four à sole s\'est faite sans perturber la production.',
  },
  {
    id: '2',
    author: 'Sophie Martin',
    role: 'Gérante',
    company: 'Délices & Créations',
    quote: 'Leur contrat de maintenance nous sauve la vie. Un technicien est intervenu un dimanche matin pour notre chambre froide. Service impeccable.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Boulangerie L\'Authentique',
    category: 'Fournil Complet',
    imageUrl: 'https://picsum.photos/id/431/600/400',
  },
  {
    id: 'p2',
    title: 'Pâtisserie des Arts',
    category: 'Rénovation Froid',
    imageUrl: 'https://picsum.photos/id/292/600/400',
  },
  {
    id: 'p3',
    title: 'Cuisine Centrale Hopital',
    category: 'Grande Cuisine',
    imageUrl: 'https://picsum.photos/id/1080/600/400',
  },
];