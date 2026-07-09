import { crafts } from "@/data/crafts";
import { cultureNotes } from "@/data/cultureNotes";
import { foods } from "@/data/foods";
import { moods } from "@/data/moods";
import { places } from "@/data/places";

export const allGuides = [...places, ...cultureNotes, ...foods, ...crafts, ...moods];
