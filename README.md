# Adjusting line height

You can config following items in the setting panel of this plugin:

- The line height inside a paragraph block
- The margin bewteen blocks

> Notice: An extreme value may lead to abnormal display or behavior in complex blocks such as lists.

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

