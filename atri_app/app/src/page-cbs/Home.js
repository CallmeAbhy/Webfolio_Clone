import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useDiv1Cb() {
	const onClick = useCallback(callbackFactory("Div1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useMenu1Cb() {
	const onClick = useCallback(callbackFactory("Menu1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "open"
      ]
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox1Cb() {
	const onClick = useCallback(callbackFactory("TextBox1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}