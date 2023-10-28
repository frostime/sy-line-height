/*
 * Copyright (c) 2023 by Yp Z (frostime). All Rights Reserved.
 * @Author       : Yp Z
 * @Date         : 2023-10-27 21:37:07
 * @FilePath     : /src/index.ts
 * @LastEditTime : 2023-10-28 17:25:34
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
            this, CONFIG_FILE_NAME, this.onSettingUpdatedBindThis, null, '20rem'
        );
        this.settingUtils.addItem({
            key: "line-height",
            value: 1.625,
            type: "slider",
            title: "块内行高",
            description: "编辑器段落块内行高, line-height",
            slider: {
                min: 1,
                max: 2.5,
                step: 0.025,
            }
        });
        this.settingUtils.addItem({
            key: "node-margin",
            value: 2,
            type: "slider",
            title: "块间距",
            description: "编辑器段落块之间的上下间距, margin-bottom magin-top",
            slider: {
                min: 0,
                max: 5,
                step: 0.5,
            }
        })
        this.settingUtils.addItem({
            key: "reset",
            type: "button",
            title: '重置',
            description: '',
            value: null,
            button: {
                label: "Reset",
                callback: () => {
                    const eleHeight: HTMLInputElement = this.settingUtils.elements.get('line-height') as HTMLInputElement;
                    eleHeight.value = '1.625';
                    eleHeight.ariaLabel = '1.625';
                    const eleMargin: HTMLInputElement = this.settingUtils.elements.get('node-margin') as HTMLInputElement;
                    eleMargin.value = '2';
                    eleMargin.ariaLabel = '2';
                }
            }
        })
        this.settingUtils.load();
    }

    onSettingUpdated(data: any) {
        console.debug('Update config', data);
        this.data[CONFIG_FILE_NAME] = data;
        this.saveData(CONFIG_FILE_NAME, this.data[CONFIG_FILE_NAME]);
        document.documentElement.style.setProperty(
            '--custom-line-height', this.data[CONFIG_FILE_NAME]['line-height']
        );
        document.documentElement.style.setProperty(
            '--custom-node-margin-tb', `${this.data[CONFIG_FILE_NAME]['node-margin']}px`
        );
    }

}
