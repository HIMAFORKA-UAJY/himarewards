import * as functions from "firebase-functions";
import { google } from "googleapis";

const initCors = (request: functions.https.Request, response: functions.Response<any>): void => {
    response.set("Access-Control-Allow-Origin", "*");
    if (request.method === "OPTIONS") {
        response.set("Access-Control-Allow-Methods", "GET, POST");
        response.set("Access-Control-Allow-Headers", "Content-Type");
        response.set("Access-Control-Max-Age", "3600");
        response.status(204).send("");
    }
};

const authGoogle = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
    return auth.getClient();
};

const getRewards = async () => {
    const auth = await authGoogle();

    const googleSheets = google.sheets({ version: "v4", auth: auth });
    const spreadsheetId = "1EJtTbNniXmILNlxhvlXjbaNn6ncLsbDiIyqECzWNbbE";

    const data = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "'1'!B6:N67",
    });

    return data.data.values;
};

export const himarewards = functions.region("asia-northeast1").https.onRequest(async (request, response) => {
    initCors(request, response);
    const data = await getRewards();

    switch (request.method) {
        case "GET":
            response.send(data);
            break;
        default:
            response.send({ status: "error" });
            break;
    }
});
