     AREA MULTIPLY, CODE, READONLY
ENTRY

START
    MOV R1, #6400         ; Load immediate value 6400 into R1
    MOV R2, #3200         ; Load immediate value 3200 into R2
    MUL R3, R1, R2        ; Multiply R1 and R2, store result in R3

    NOP                   ; No operation (placeholder)
    NOP                   ; No operation (placeholder)
    
    END                   ; End of program
