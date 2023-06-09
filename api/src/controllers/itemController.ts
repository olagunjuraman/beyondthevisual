import { Request, Response } from "express";
import { Item } from "../models/item";
import asyncHandler from "express-async-handler";
import itemsData from "../data/items.json";

const items: Item[] = itemsData as Item[];

export const listItems = asyncHandler(async (req: Request, res: Response) => {
  res.json(items);
});
