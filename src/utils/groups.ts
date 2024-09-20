import { Protocol } from '../protocols';

const groupByCategory = (protocols: Protocol[]): Protocol[][] => {
  const sorted = protocols.slice().sort((a, b) => a.name.localeCompare(b.name));
  const categoryMap = new Map<string, Protocol[]>();

  sorted.forEach((protocol) => {
    if (!categoryMap.has(protocol.category.toLowerCase())) {
      categoryMap.set(protocol.category.toLowerCase(), []);
    }
    categoryMap.get(protocol.category.toLowerCase())!.push(protocol);
  });

  return Array.from(categoryMap.values());
};

export { groupByCategory };
