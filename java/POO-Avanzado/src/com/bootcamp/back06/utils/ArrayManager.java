package com.bootcamp.back06.utils;

import java.util.Arrays;

public class ArrayManager {

    public static <T> T[] expandirArray(T[] array, int posiciones) {
        return Arrays.copyOf(array, posiciones);
    }
}
