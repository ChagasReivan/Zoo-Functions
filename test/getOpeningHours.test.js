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

  it('testa se ao passar um dia invalido retorna um erro', () => {
    expect(() => getOpeningHours('reivan')).toThrow('The day must be valid. Example: Monday');
  });

  it('testa se ao passar horas invalidas retorna um erro', () => {
    expect(() => getOpeningHours('tuesday', '29:30-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('testa se ao passar minutos invalidos retorna um erro', () => {
    expect(() => getOpeningHours('tuesday', '8:99-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('testa se ao passar sem o - retorna um erro', () => {
    expect(() => getOpeningHours('tuesday', '8:30AM')).toThrow('The minutes should represent a number');
  });

  it('testa se ao passar o parametro AM / PM errad, retorna um erro', () => {
    expect(() => getOpeningHours('tuesday', '8:30-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('testa se ao passar os parametros de um horário onde o zoo esta aberto retorna a mensagem de open', () => {
    expect(getOpeningHours('wednesday', '8:30-AM')).toEqual('The zoo is open');
  });

  it('testa se ao passar os parametros de um horário onde o zoo esta fechado retorna a mensagem de closed', () => {
    const closed = 'The zoo is closed';
    expect(getOpeningHours('wednesday', '4:30-AM')).toEqual(closed);
    expect(getOpeningHours('tuesday', '3:30-AM')).toEqual(closed);
    expect(getOpeningHours('monday', '9:30-AM')).toEqual(closed);
  });
});
