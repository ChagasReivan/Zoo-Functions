const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se HandlerElephants é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('testa se o parametro for undefined, retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('testa se o parametro não for uma string, retorna a frase: parametro inválido, é necessário uma string', () => {
    expect(handlerElephants(9)).toEqual('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(true)).toEqual('Parâmetro inválido, é necessário uma string');
  });

  it('testa se o parametro for uma string inválida, retorna null', () => {
    expect(handlerElephants('lion')).toBe(null);
  });

  it('testa se  o parametro for id o retorno é bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5', () => {
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
  });

  it('testa se o parametro for name o retorno é elephants', () => {
    expect(handlerElephants('name')).toEqual('elephants');
  });

  it('testa se o parametro for popularity o retorno é 5', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });

  it('testa se o parametro for location o retorno é NW', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });

  it('testa se o parametro for availability o retorno são os dias em que podem ver os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('testa se o parametro for count o retorno é a quantidade de residentes em elephants', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('testa se o parametro for names o retorno são os nomes dos elefantes residentes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('testa se o parametro averageAge retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
});
