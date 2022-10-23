import * as functions from "firebase-functions";
import { google } from "googleapis";

interface Data {
    no: number,
    nama: string,
    npm: string,
    email: string,
    angkatan: number,
    peringkat: number,
    poin: {
        kegiatan_tutor_uts: number,
        workshop_internal: number,
        sharing_alumni_series_1: number,
        pengabdian_1: number,
        sharing_alumni_series_2: number,
        kegiatan_tutor_uas: number,
        total_poin: number;
    };
}

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

    let sheetData = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "'1'!B6:N67",
    });
    let returnData: Data[] = [];

    sheetData.data.values?.forEach((data) => {
        returnData.push({
            "no": Number(data[0]),
            "nama": String(data[1]),
            "npm": String(data[2]),
            "email": String(data[3]),
            "angkatan": Number(data[4]),
            "peringkat": Number(data[12]),
            "poin": {
                "kegiatan_tutor_uts": Number(data[5]),
                "workshop_internal": Number(data[6]),
                "sharing_alumni_series_1": Number(data[7]),
                "pengabdian_1": Number(data[8]),
                "sharing_alumni_series_2": Number(data[9]),
                "kegiatan_tutor_uas": Number(data[10]),
                "total_poin": Number(data[11])
            }
        });
    });

    return returnData;
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
