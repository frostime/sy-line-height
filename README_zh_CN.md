# 调整行高

在本插件的设置页面中，可以设置:

- 调整段落的行高 (line-width)
- 调整段落的间距 (margin)

> 注意: 如果你将调整的数值设置的过大和过小，可能会导致列表等复杂块排版出现异常错位

## CSS

```scss
:root {
    --custom-line-height: 1.625;
    --custom-node-margin-tb: 5px;
}

.b3-typography p, .b3-typography [data-node-id], .protyle-wysiwyg p, .protyle-wysiwyg [data-node-id] [spellcheck] {
    line-height: var(--custom-line-height);
}

#layouts div.layout-tab-container > div.protyle > div.protyle-content > div.protyle-wysiwyg {
    p {
        line-height: var(--custom-line-height) !important;
    }
    [data-node-id] {
        margin-top: var(--custom-node-margin-tb);
        margin-bottom: var(--custom-node-margin-tb);

        &.p {
            line-height: var(--custom-line-height) !important;
        }
    }
}
```

