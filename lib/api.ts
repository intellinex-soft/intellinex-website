import axios from "axios";

class Api {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async POST(endpoint: string, data?: any): Promise<any> {
    try {
      const config = {
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: {},
      };
      if (data) {
        config.body = JSON.stringify(data);
      }

      const response = await axios.request(config);

      return response.data;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      throw new Error(`Failed to make API request: ${err.message}`);
    }
  }
}

export default Api;
