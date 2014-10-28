

push_c ##index - vlozi na zasobnik z constant poolu
push <int> - vlozi na zasobnik cislo
load #index - vlozi na zasobnik z lokalni promenne
store #index - ulozi do localni promenne hodnotu ze zasobniku

add - secte hondnoty na zasobniku
subtract - odecte hodnoty na zasobniku

compare - porovna hodnoty na zasobniku, deprecated
greater - >
greater_or_equal - >=
less - <
less_or_equal - <=
equal - ==
conditional_jump #instruction - pokud je na zasobniku > 1, tak skoci na danou instruci relativne

jump #instruction- skoci na instrukci relativne
greater_jump #instruction
greater_or_equal_jump #instruction
less_jump #instruction
less_or_equal_jump #instruction
equal_jump #instruction

duplicate - duplikuje vrchol zasobniku
negate - neguje vrchol zasobniku, 0 -> 1, ostatni -> 0
return_value - vyskoci z funkce a vrati hodnotu ze zasobniku
return - vyskoci z funkce
terminate - konec programu:)

new_array - vytvori nove pole
