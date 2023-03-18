const fetchProduct = require("../async");

describe("async test", () => {
  /**
   * fail case
   */
  // test("fetch product", () => {
  //   fetchProduct().then((item) => {
  //     expect(item).toEqual({ item: "Milk", price: 200 });
  //   });
  // });

  /**
   * success case
   */

  // worst way
  it("async done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it("async return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async resolves", async () => {
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async rejects", async () => {
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
