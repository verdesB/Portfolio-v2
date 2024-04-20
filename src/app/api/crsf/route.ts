import { NextApiRequest, NextApiResponse } from "next";
import { setup } from "../../../lib/csrf";

interface NextApiRequestWithCsrf extends NextApiRequest {
    csrfToken: () => string;
}

export default setup((req: NextApiRequest, res: NextApiResponse): any => {
    const csrfReq = req as NextApiRequestWithCsrf;
    res.status(200).json({ csrfToken: csrfReq.csrfToken() });
});
