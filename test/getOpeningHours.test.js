const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  const dias = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };

  it('testa se quando a função é passada sem parametros o retorno são os dias da semana', () => {
    expect(getOpeningHours()).toEqual(dias);
  });

  it('testa se independente das letras maisculas ou minusculas passa a informação certa', () => {
    expect(getOpeningHours('tUesdAy', '8:30-AM')).toEqual('The zoo is open');
  });

  it('testa se ao passar um dia inválido retorna o erro The day must be valid. Example: Monday', () => {
    expect(() => getOpeningHours('reivan').toThrow('The day must be valid. Example: Monday'));
  });

  it('testa se ao passar horas inválidas retorna um erro', () => {
    expect(() => getOpeningHours('tuesday', '25:30-AM').toThrow(Error));
  });

  it('testa se ao passar minutos inválidas retorna um erro', () => {
    expect(() => getOpeningHours('tuesday', '8:99-AM').toThrow(Error));
  });

  it('testa se ao passar os minutos sem o caracter - retorna um erro', () => {
    expect(() => getOpeningHours('tuesday', '8:30AM').toThrow(Error));
  });

  it('testa se ao passar os parametros sem Am ou Pm retorna um erro', () => {
    expect(() => getOpeningHours('tuesday', '8:30-ZM').toThrow(Error));
  });

  it('testa se ao passar os parametros de um horário onde o zoo esta aberto retorna a mensagem de open', () => {
    expect(getOpeningHours('wednesday', '8:30-AM')).toEqual('The zoo is open');
  });

  it('testa se ao passar os parametros de um horário onde o zoo esta fechado retorna a mensagem de closed', () => {
    expect(getOpeningHours('wednesday', '4:30-AM')).toEqual('The zoo is closed');
  });
});
