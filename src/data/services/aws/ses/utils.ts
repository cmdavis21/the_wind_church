export const baseTemplate = `
<!DOCTYPE html>
<html>

<head>
    <style>
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #dddddd;
            border-radius: 5px;
            font-family: sans-serif;
            line-height: 1.6;
            color: #333333;
        }

        .header {
            font-size: 24px;
            font-weight: bold;
            color: #1a1a1a;
            padding-bottom: 15px;
            border-bottom: 1px solid #eeeeee;
        }

        .content {
            padding-top: 15px;
        }

        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #FED23E;
            color: #000000;
            text-decoration: none;
            border-radius: 5px;
        }

        .footer {
            margin-top: 20px;
            font-size: 12px;
            color: #999999;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="header">
            {{title}}
        </div>
        <div class="content">
            <p>A new document is available in Sanity.io!</p>
            <p>{{firstName}} {{lastName}} has made a submission.</p>
            <a href={link} class="button">View Document in Sanity.io</a>
        </div>
        <div class="footer">
            &copy; 2025 Wind of the Spirit Worship Center. All rights reserved.
        </div>
    </div>
</body>

</html>
`;

export const renderTemplate = (template: string, variables: Record<string, string>) => {
  return template.replace(/{{(.*?)}}/g, (_, key) => {
    return variables[key.trim()] ?? '';
  });
};
