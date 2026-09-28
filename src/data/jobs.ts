export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
};

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Engineer',
    company: 'Acme Co',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Build and maintain user-facing features using React Native and TypeScript.',
  },
  {
    id: '2',
    title: 'Backend Engineer',
    company: 'Northwind',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Design and scale APIs powering our hiring platform.',
  },
  {
    id: '3',
    title: 'Product Designer',
    company: 'Globex',
    location: 'San Francisco, CA',
    type: 'Contract',
    description: 'Own the end-to-end design of our job seeker experience.',
  },
];
