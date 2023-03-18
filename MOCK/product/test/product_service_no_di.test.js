const ProductClient = require("../product_client");
const ProductService = require("../product_service_no_di");
jest.mock("../product_client");

describe("ProductService", () => {
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "Banana", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  test("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items).toHaveLength(1);
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });

  test("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
