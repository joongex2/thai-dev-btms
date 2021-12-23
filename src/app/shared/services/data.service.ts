import { Injectable } from "@angular/core";
import { RunningNo, RunningNoData, SubTarget, Target } from "../interfaces/target.interface";

@Injectable({ providedIn: 'root' })
export class DataService {
    runningNos: RunningNo[] = [{
        data: {
            "Site": "บริษัท เบทาโกร จำกัด มหาชน (โรงงานปากช่อง)",
            "Division": "สำนักการผลิต (FC)",
            "Department": "แผนกวิศวกรรม",
            "Target Type": "ระบบการจัดการ",
            "Status": "Issued",
            "Running No.": "OBJ-ENPC-64-02",
            "Year": "2021",
            "Revision No.": "01",
            "Modify No.": "",
            "Create Date": "01/02/2021",
            "Issued Date": "03/02/2021",
            "Creator": "Phaiboon Charoensalung"
        },
        "kids": {
            "has_targets": {
                "records": [
                    {
                        "data": {
                            "Target ID": "1",
                            "Name": "รายงานการกระทำที่เป็นอันตราย",
                            "Standard": "ISO 14001/ISO 45001",
                            "Relative Target": "4"
                        },
                        "kids": {
                            "has_sub_targets": {
                                "records": [
                                    {
                                        "data": {
                                            "Sub Target ID": "1",
                                            "Name": "รายงานการกระทำที่เป็นอันตราย...",
                                            "Index": "ฉบับ/เดือน",
                                            "Value": ">=1",
                                            "Unit": "เรื่อง/เดือน",
                                            "Current Value": "1",
                                            "Start Month": "ม.ค.",
                                            "Start Year": "2021",
                                            "Finish Month": "ธ.ค.",
                                            "Finish Year": "2021"
                                        },
                                        "kids": {
                                            "has_methods": {
                                                "records": [
                                                    {
                                                        "data": {
                                                            ['Method ID']: "1",
                                                            "Name": "1",
                                                            "Jan": "1",
                                                            "Feb": "1",
                                                            "Mar": "1",
                                                            "Apr": "1",
                                                            "May": "1",
                                                            "Jun": "1",
                                                            "Jul": "1",
                                                            "Aug": "1",
                                                            "Sep": "1",
                                                            "Oct": "1",
                                                            "Nov": "1",
                                                            "Dev": "1",
                                                            "Owner": "1"
                                                        },
                                                        "kids": {

                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        }
    }, {
        data: {
            "Site": "บริษัท เบทาโกร2 จำกัด มหาชน (โรงงานปากช่อง)",
            "Division": "สำนักการผลิต (FC)",
            "Department": "แผนกวิศวกรรม",
            "Target Type": "ระบบการจัดการ",
            "Status": "Issued",
            "Running No.": "OBJ-ENPC-64-01",
            "Year": "2021",
            "Revision No.": "01",
            "Modify No.": "",
            "Create Date": "30/01/2021",
            "Issued Date": "03/02/2021",
            "Creator": "Phaiboon Charoensalung"
        },
        "kids": {
            "has_targets": undefined
        }
    }, {
        data: {
            "Site": "บริษัท เบทาโกร3 จำกัด มหาชน (โรงงานปากช่อง)",
            "Division": "สำนักการผลิต (FC)",
            "Department": "แผนกวิศวกรรม",
            "Target Type": "ระบบการจัดการ",
            "Status": "Issued",
            "Running No.": "OBJ-ENLR3-64-02",
            "Year": "2021",
            "Revision No.": "01",
            "Modify No.": "",
            "Create Date": "30/01/2021",
            "Issued Date": "09/02/2021",
            "Creator": "Phaiboon Charoensalung"
        },
        "kids": {
            "has_targets": undefined
        }
    }, {
        data: {
            "Site": "บริษัท เบทาโกร4 จำกัด มหาชน (โรงงานปากช่อง)",
            "Division": "สำนักการผลิต (FC)",
            "Department": "แผนกวิศวกรรม",
            "Target Type": "ระบบการจัดการ",
            "Status": "Issued",
            "Running No.": "OBJ-ENLR3-64-01",
            "Year": "2021",
            "Revision No.": "01",
            "Modify No.": "",
            "Create Date": "30/01/2021",
            "Issued Date": "10/02/2021",
            "Creator": "Phaiboon Charoensalung"
        },
        "kids": {
            "has_targets": undefined
        }
    }];

    constructor() { }

    getRunningNos(): RunningNo[] {
        return this.runningNos;
    }

    getRunningNo(runningNo: string): RunningNo {
        return this.runningNos.find((_runningNo) => _runningNo.data["Running No."] === runningNo);
    }

    getRunningNoData(runningNo: string): RunningNoData {
        const runningNoData = this.runningNos.find((_runningNo) => _runningNo.data["Running No."] === runningNo);
        return runningNoData.data;
    }

    getTargets(runningNo: string): Target[] {
        const runningNoData = this.runningNos.find((_runningNo) => _runningNo.data["Running No."] === runningNo);
        return runningNoData.kids.has_targets.records;
    }

    addSubTarget(runningNo: string, targetId: string, subTarget: SubTarget): Target {
        const _runningNo = this.getRunningNo(runningNo);
        const target = _runningNo.kids.has_targets.records.find((target) => target.data["Target ID"] === targetId);
        console.log(target);
        target.kids.has_sub_targets.records.push({ data: subTarget, kids: { has_methods: undefined } });
        return target;
    }

    addMethod(runningNo: string, targetId: string, subTargetId: string) {

    }

}