export const formatSortCode = (sortCode: string) =>
  sortCode ? sortCode.match(/.{1,2}/g).join(`-`) : ``;

export const formatAmount = (amount: string) => {
  let result = ``;
  if (amount.search(`.`) !== -1) {
    const split = amount.split(`.`);
    if (split[1].length < 2) result = `${split[2]}0`;
  } else {
    result = `${amount}.00`;
  }
  return result;
};
