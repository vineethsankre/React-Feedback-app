In this project, let's build a react **Feedback App** 

### Reference Image:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/feedback-app-output-v2.gif" alt="feedback-large-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/feedback-app-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Feedback Question](https://assets.ccbp.in/frontend/content/react-js/feedback-app-question-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Thank You Screen](https://assets.ccbp.in/frontend/content/react-js/feedback-app-summary-lg-output-v2.png)
</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When an emoji is clicked, then the thank you screen should be displayed
- The `Feedback` component receives the `resources` as a prop. It consists of the following properties

  |     Key      |    Data Type     |
  | :----------: | :--------------: |
  |    emojis    | Array \<object\> |
  | loveEmojiUrl |      String      |

- `emojis` consists of list of emoji objects with the following properties in each emoji object

  |   Key    | Data Type |
  | :------: | :-------: |
  |    id    |  Number   |
  |   name   |  String   |
  | imageUrl |  String   |

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Feedback/index.js`
- `src/components/Feedback/index.css`
</details>








