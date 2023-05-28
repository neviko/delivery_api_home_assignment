import axios from "axios";
import { IAddress } from "../common/interfaces/address.interface";
const key = process.env.GEOAPIFY_KEY || "ab1512dfd6fc43939bcd10a2927e9214";
const providerBaseURL = `https://api.geoapify.com/v1/geocode/search?apiKey=${key}`;
export const getStructuredAddress = async (
  address: string
): Promise<IAddress> => {
  const uri = `${providerBaseURL}&text=${encodeURIComponent(address)}`;
  const { data } = await axios.get(uri);
  const props = data.features[0].properties;
  return {
    country: props.country,
    street: props.street,
    postcode: props.postcode,
    line1: props.address_line1,
    line2: props.address_line2,
  } as IAddress;
};
