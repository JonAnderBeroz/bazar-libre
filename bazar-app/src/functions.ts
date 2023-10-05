export function formatRating(rating: number): string {
  const star = "★";
  return star.repeat(Math.round(rating)).padEnd(5, "☆");
}
