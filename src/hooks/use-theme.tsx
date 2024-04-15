import { createContext, useContext, useEffect, useState } from "react";
import {ThemeProviderContext} from "@/components/common/providers/theme-provider"
 
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
