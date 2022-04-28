const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});

test('Inserir um produto, a lista contém o produto com id', () => {
    produtoNegocio.inserir({ nome: "pastel", preco: 5 });
    expect(produtoNegocio.listar()).toContain({ id: 1, nome: "pastel", preco: 5 })
});