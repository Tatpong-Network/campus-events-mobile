export type CampusEvent = {
  id: string;
  title: string;
  description: string;
  startsAt: string;
  imageUrl?: string;
  location: { name: string; latitude: number; longitude: number; };
};