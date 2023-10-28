/*
 * Copyright (c) 2023 by Yp Z (frostime). All Rights Reserved.
 * @Author       : Yp Z
 * @Date         : 2023-10-27 21:37:07
 * @FilePath     : /src/index.ts
 * @LastEditTime : 2023-10-28 16:36:14
 * @Description  : Adjust the line height of siyuan editor`
 */
import {
    Plugin,
    getFrontend,
} from "siyuan";
import "@/index.scss";


import { SettingUtils } from "./libs/setting-utils";
const CONFIG_FILE_NAME = "config.json";


export default class LineHeightPlugin extends Plugin {

    isMobile: boolean;
    settingUtils: SettingUtils;
    onSettingUpdatedBindThis = this.onSettingUpdated.bind(this);

    async onload() {

        const frontEnd = getFrontend();
        this.isMobile = frontEnd === "mobile" || frontEnd === "browser-mobile";

        this.settingUtils = new SettingUtils(
            this, CONFIG_FILE_NAME, this.onSettingUpdatedBindThis, null, '15rem'
        );
        this.settingUtils.addItem({
            key: "Check",
            value: true,
            type: "checkbox",
            title: "Checkbox text",
            description: "Check description",
        });
        this.settingUtils.addItem({
            key: "height",
            value: 1.625,
            type: "slider",
            title: "Line height",
            description: "Slider description",
            slider: {
                min: 1,
                max: 3,
                step: 0.025,
            }
        });
        this.settingUtils.load();
    }

    onSettingUpdated(data: any) {
        console.debug('Update config', data);
        this.data[CONFIG_FILE_NAME] = data;
        this.saveData(CONFIG_FILE_NAME, this.data[CONFIG_FILE_NAME]);
        document.documentElement.style.setProperty('--custom-line-height', this.data[CONFIG_FILE_NAME].height);
    }

}
