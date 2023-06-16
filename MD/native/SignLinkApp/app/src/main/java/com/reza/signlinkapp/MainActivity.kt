package com.reza.signlinkapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.reza.signlinkapp.ui.theme.SignLinkAppTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            SignLinkAppTheme {
                // A surface container using the 'background' color from the theme
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    var isLoggedIn by remember { mutableStateOf(false) }

                    if (isLoggedIn) {
                        // Tampilkan halaman setelah login berhasil
                    } else {
                        LoginForm(onLoginSuccess = { isLoggedIn = true })
                    }
                }
            }
        }
    }
}

@Composable
fun LoginForm(onLoginSuccess: () -> Unit) {
    var email by remember { mutableStateOf("") }
    var password by remember { mutableStateOf("") }

    Column(
        modifier = Modifier.padding(16.dp)
    ) {
        Spacer(modifier = Modifier.height(16.dp))
        Text(
            text = "Login",
            style = MaterialTheme.typography.h4,
            modifier = Modifier.padding(bottom = 16.dp)

        )

        OutlinedTextField(
            value = email,
            onValueChange = { email = it },
            label = { Text("Email") },
            modifier = Modifier.fillMaxWidth()
        )

        OutlinedTextField(
            value = password,
            onValueChange = { password = it },
            label = { Text("Password") },
            modifier = Modifier.fillMaxWidth()
        )

        Spacer(modifier = Modifier.height(16.dp))

        Button(
            onClick = {
                // Validasi login di sini
                if (email.isNotEmpty() && password.isNotEmpty()) {
                    // Simulasi login berhasil
                    onLoginSuccess()
                }
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(text = "Login")
        }
    }
}

@Preview
@Composable
fun PreviewLoginForm() {
    LoginForm(onLoginSuccess = {})
}
