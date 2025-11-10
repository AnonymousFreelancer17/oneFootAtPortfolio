export default function FilterUniqueElements(data: any[]): any[] {
  const seen = new Set<string>();

  return data.filter((item) => {
    const key =
      item.href ||
      JSON.stringify(item.images?.slice().sort() || []).substring(0, 200);

    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}