export const formatSortCode = (sortCode: string) =>
  sortCode ? sortCode.match(/.{1,2}/g).join(`-`) : ``;

export const formatAmount = (amount: string) => {
  let result = ``;
  if (amount.indexOf(`.`) !== -1) {
    const split = amount.split(`.`);
    if (split[1].length < 2) {
      result = `${split[0]}.${split[1]}0`;
    } else if (split[1].length > 2) {
      result = `${split[0]}.${split[1].slice(0, 2)}`;
    } else {
      result = amount;
    }
  } else {
    result = `${amount}.00`;
  }
  return result;
};
