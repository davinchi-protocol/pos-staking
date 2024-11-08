export interface FetchTotalValidatorsResponse {
  statusCode: number;
  body: {
    totalValidators: number;
    msg?: unknown;
  };
}

export const fetchTotalValidators = async (): Promise<FetchTotalValidatorsResponse> => {
  // const { href } = new URL('/api/v1/epoch/latest', BEACONCHAIN_URL);
  // try {
  //   const response = await axios.get<EpochData>(href);
  //   if (response.status !== 200) throw new Error(response.statusText);
  //   const { data } = response;
  //   const { validatorscount: totalValidators } = data.data;
  //   return { statusCode: 200, body: { totalValidators } };
  // } catch (error) {
  //   // eslint-disable-next-line no-console
  //   console.error(error);
  //   return {
  //     statusCode: 500,
  //     body: {
  //       totalValidators: 1234,
  //       msg: error,
  //     },
  //   };
  // }
  const totalValidators = Math.floor(new Date().getTime() / 1000000 - 1730000);

  return { statusCode: 200, body: { totalValidators } };
};
